'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from "react"
import { hf } from "../image/page"

export default function SumPage(){
    const [sum_text, setContent] = useState('')
    const [userInput, setInput] = useState('')
    const modelId = 'facebook/bart-large-cnn'

    const handleChange = (e : React.ChangeEvent < HTMLInputElement >) => {
        setInput(e.target.value)
        console.log(e.target.value)
    }

    const handleClick = () => {
        setContent('')
        summarize_model(userInput)
    }

    const showLoader = () => {
        const spinner = document.getElementById("load")
        if (spinner) {
            spinner
                .classList
                .remove("hidden")
        }
    }

    const hideLoader = () => {
        const spinner = document.getElementById("load")
        if (spinner) {
            spinner
                .classList
                .add("hidden")
        }
    }

    async function summarize_model(input: string) {
        try{
            showLoader()
            await hf.summarization({
                model: `${modelId}`,
                inputs: `${input}`,
                parameters: {
                  max_length: 100
                }
              }).then(summarized_text => {
                console.log(summarized_text)
                hideLoader()
                setContent(summarized_text['summary_text'])
            })
        } catch(err) {
            console.log(err)
            hideLoader()
            setContent("Something Went Wrong !!")
        }
    }
    

    return(
        <div>
        <h2 className="font-bold text-4xl">Chat with {modelId.toUpperCase()}</h2>
    <div className="min-h-screen grid grid-cols-1 gap-4 place-content-center">
        <Card className="gap-4 p-4">
            <div className="space-y-2 hidden" id="load">
                <Skeleton className="h-4 w-full"/>
                <Skeleton className="h-4 w-[50%]"/>
            </div>
            <p className="text-base">
                {sum_text}
            </p>
        </Card>
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