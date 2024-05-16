import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import Contact from "@/models/form";

export async function POST(request: Request) {
    const { email, message } = await request.json();

    try {
        await connectDB();
        await Contact.create({ email, message });
        return Response.json({
            msg: "Data sent Successfully!",
            success: true
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }

            return Response.json({ msg: errorList });
        } else {
            return Response.json(error);
        }
    }
}
