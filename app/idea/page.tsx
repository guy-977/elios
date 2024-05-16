"use client"
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"



export default function IdeaForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        AOS.init();
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Email: ", email);
        console.log("Message: ", message);

        const res = await fetch("api/form", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email,
                message,
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setEmail("");
            setMessage("");
        }
    };

    return (
        <div>
            <div className="circlePosition w-[40vw] h-[40vw] bg-blue-500 rounded-[100%] absolute z-1 top-2/4 left-2/4 translate-y-2/4 translate-y-2/4 blur-[120px]"></div>
            <div className="circlePosition w-[50vw] h-[50vw] bg-blue-500 rounded-[100%] absolute z-1 top-[5%] left-[10%] translate-x-[-50%] translate-y-[5%] blur-[120px]"></div>
            <div className="min-h-screen flex flex-col justify-center justify-items-center relative blurtext bg-[gray]/20 z-10 p-2 backdrop-blur-[50px] rounded-xl">
                <div>
                    <h1 className="text-6xl text-center mt-6 font-bold flex flex-col">
                        Elios
                        <span className="text-center info mt-4 text-sm font-normal">AI tools for all problems</span></h1>
                </div>
                <div className="flex justify-center items-center mt-24 flex-col">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center w-[50%]"
                    >
                        <div className="mb-4 w-full">
                            <Label htmlFor="email">Your email address</Label>
                            <Input 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="text"
                            id="email"
                            placeholder="john@gmail.com"
                            />
                        </div>

                        <div className="mb-4 w-full">
                            <Label htmlFor="message">Your Ideas Matter!</Label>
                            <Textarea 
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            className="h-32"
                            id="message"
                            placeholder="Type your thoughts, suggestions and ideas here..."/>
                        </div>

                        <Button type="submit" className="rounded-full bg-blue-500 w-full">Submit</Button>
                    </form>
                    <div className="bg-slate-100 flex flex-col">
                        {error && Array.isArray(error) && error.map((e) => (
                            <div
                                key={e}
                                className={`${success ? "text-blue-500" : "text-red-600"
                                    } px-5 py-2`}
                            >
                                {e}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="circlePosition w-[50vw] h-[50vw] bg-blue-500 rounded-[100%] absolute z-1 buttom-[50%] left-[10%] translate-x-[-50%] translate-y-[-50%] blur-[120px]"></div>
        </div>
    );
}
