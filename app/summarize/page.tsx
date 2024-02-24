'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"

export default function SumPage(){
    const [sum_text, setContent] = useState('')
    const [userInput, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const modelId = 'facebook/bart-large-cnn'

    const handleChange = (e : React.ChangeEvent < HTMLInputElement >) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        setContent('')
        summarize_model(userInput)
    }

    async function summarize_model(input: string) {
        try{
            setLoading(true)
            const response = await fetch(
                "/api/summarize",
                {
                    headers: { "Content-type": "application/json"},
                    method: "POST",
                    body: JSON.stringify({'prompt': input}),
                }
            );
            const result = await response.json();
            setLoading(false)
            setContent(result.summary_text)
            return result;
        } catch(err) {
            setLoading(false)
            setContent("Something Went Wrong !!")
            console.log(err)
        }
    }
    

    return(
        <div>
        <h2 className="font-bold text-2xl">Summarize text using {modelId.toUpperCase()}</h2>
    <div className="min-h-screen grid grid-cols-1 gap-4 place-content-center">
        {loading && (
            <div className="space-y-2" id="load">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[50%]" />
            </div>
            )}
        {sum_text !== "" && sum_text !== null ? (
            <Card className="gap-4 p-4">
            <p className="text-base">
                {sum_text}
            </p>
        </Card>
        ) : null }
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