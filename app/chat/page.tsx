'use client'

import {useState} from "react"
import {hf} from "../image/page"
import {Card} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Skeleton} from "@/components/ui/skeleton"

export default function ChatPage() {
    const [gen_text, setContent] = useState('')
    const [userInput, setInput] = useState('')
    const modelId: string = 'gpt2'

    const handleChange = (e : React.ChangeEvent < HTMLInputElement >) => {
        setInput(e.target.value)
        console.log(e.target.value)
    }

    const handleClick = () => {
        setContent('')
        LLM(userInput)
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

    async function LLM(input : string) {
        try {
            showLoader()
            await hf
                .textGeneration({
                model: `${modelId}`,
                inputs: `${input}`,
                parameters: {
                    max_new_tokens: 250
                }
            })
                .then(generated_text => {
                    console.log(generated_text)
                    hideLoader()
                    setContent(generated_text['generated_text'])
                })
        } catch (e) {
            console.log(e)
            hideLoader()
            setContent("Something Went Wrong!!!!")
        }
    }

    return (
        <div>
            <h2 className="font-bold text-4xl">Chat with {modelId.toUpperCase()}</h2>
        <div className="min-h-screen grid grid-cols-1 gap-4 place-content-center">
            <Card className="gap-4 p-4">
                <div className="space-y-2 hidden" id="load">
                    <Skeleton className="h-4 w-full"/>
                    <Skeleton className="h-4 w-[200px]"/>
                </div>
                <p className="text-base">
                    {gen_text}
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