import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import { RefreshCcw } from 'lucide-react';

interface NextFeatsProps {
    title?: string;
}

export default function NextFeats(props : NextFeatsProps) {
    return (
        <Card className="p-4 min-w-full">
            <CardContent
                className="flex flex-col justify-center items-center content-center gap-4 min-w-8 relative">
                <h3>{props.title !== undefined
                        ? props.title
                        : " "}</h3>
                <Button>
                    <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                    Coming Soon!
                </Button>
            </CardContent>
        </Card>
    )
}