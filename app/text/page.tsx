'use client'

import {useState} from "react"
import {Card} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Skeleton} from "@/components/ui/skeleton"

export default function ChatPage() {
    const [gen_text, setContent] = useState('')
    const [userInput, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const modelId: string = 'mixtral-8x7b'

    const handleChange = (e : React.ChangeEvent < HTMLInputElement >) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        setContent('')
        LLM(userInput)
    }

    async function LLM(input : string) {
        try {
            setLoading(true)
            const response = await fetch(
                "/api/text-gen",
                {
                    headers: {"Content-type": "application/json"},
                    method: "POST",
                    body: JSON.stringify({'prompt': input}),
                }
            )
            const result = await response.json();
            setLoading(false)
            setContent(result.generated_text)

        } catch (e) {
            setLoading(false)
            setContent("Something Went Wrong!!!!")
            return {message: e}
        }
    }

    return (
        <div>
            <h2 className="font-bold text-2xl">Generate text with {modelId.toUpperCase()}</h2>
        <div className="min-h-screen grid grid-cols-1 gap-4 place-content-center">
            {loading && (
                <div className="space-y-2" id="load">
                <Skeleton className="h-4 w-full"/>
                <Skeleton className="h-4 w-[200px]"/>
                </div>
            )}
            {gen_text && (
                <Card className="gap-4 p-4">
                <p className="text-base">
                    {gen_text}
                </p>
            </Card>
            )}
            <Card className=' relative flex justify-between'>
                <Input type={"text"} id="input" onChange={handleChange}></Input>
                <Button id="submit-button" onClick={handleClick}>
                    Generate
                </Button>
            </Card>
        </div>
        </div>
    )
}