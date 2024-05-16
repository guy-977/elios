import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";

interface HomeCardProps {
    title?: string;
    href?: string;
}

export default function HomeCard(props : HomeCardProps) {
    return (
        <Card className="p-4 min-w-full" data-aos="zoom-in">
            <CardContent
                className="flex flex-col justify-center items-center content-center gap-4 min-w-8 relative">
                <h3>{props.title !== undefined
                        ? props.title
                        : " "}</h3>
                <Link
                    href={props.href !== undefined
                    ? props.href
                    : " "}>
                    <Button className="bg-blue-500">Try it</Button>
                </Link>
            </CardContent>
        </Card>
    )
}