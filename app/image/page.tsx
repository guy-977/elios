'use client'

import {Button} from '@/components/ui/button'
import {Card, CardContent} from '@/components/ui/card'
import {Input} from '@/components/ui/input'
import Image from 'next/image'
import {useState} from 'react'

export default function ImageGen() {
    const [url,
        setURL] = useState("")
    const [inputValue,
        setInput] = useState(' ')

    const handleChange = (e : React.ChangeEvent < HTMLInputElement >) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        generateImage(inputValue)
    }

    async function generateImage(prompt : string) {
        // show Loading spinner to the screen
        showLoadingIndicator();
        // set url to empty string to clear the image container
        setURL("");

        // ### With huggingface inference API
        try {
            const response = await fetch(
                "/api/image",
                {
                    headers: {"Content-Type": "image/png"},
                    method: "POST",
                    body: JSON.stringify({'prompt': prompt}),
                }
            );
            const result = await response.blob();
            console.log(result)
            const imageUrl = URL.createObjectURL(result);
            console.log(imageUrl)
            setURL(imageUrl);
            hideLoadingIndicator();
        } catch (e) {
            hideLoadingIndicator();
            return {message: e}
        }
    }

    // function to show the loading spinner
    function showLoadingIndicator() {
        const spinner = document.getElementById("spinner")
        if (spinner) {
            spinner
                .classList
                .remove("hidden")
        }
    }

    // function to hide the loading spinner
    function hideLoadingIndicator() {
        const spinner = document.getElementById("spinner")
        if (spinner) {
            spinner
                .classList
                .add("hidden")
        }
    }
    return (
        <div>
            <Card>
                <CardContent
                    className='flex flex-col justify-center items-center content-center gap-3 relative'>
                        {url !== "" && url !== null ? (
                        <Image src={url} width={500} height={500} alt="generated image" />
                        ) : (
                        <Image src="/logo.png" width={500} height={500} alt="generated image" />
                        )}

                    <div id="spinner" className="hidden absolute">
                        <div className="spinner-container">
                            <div className="circle"></div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className=' relative flex justify-between'>
                <Input type={"text"} id="input" onChange={handleChange}></Input>
                <Button id="submit-button" onClick={handleClick}>
                    Generate
                </Button>
            </Card>
        </div>
    );
}
