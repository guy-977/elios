"use client"
import HomeCard from "./components/HomeCard";
import NextFeats from "./components/NextFeats";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Home() {
    useEffect(() => {
        AOS.init();
      }, [])
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
                <div className="flex justify-center items-center mt-24 flex-col ">
                    <p>Your Ideas matter!</p>
                    <Link href="/idea">
                        <Button className="bg-blue-500">Add your ideas now!</Button>
                    </Link>
                </div>
            </div>
            <div className="py-4 flex flex-col justify-center justify-items-center gap-4 relative">
                <HomeCard title="Text Generation" href="text"/>
                <HomeCard title="Image Generation" href="image"/>
                <HomeCard title="Summarize Text" href="summarize"/>
                <NextFeats title="PDF-to-MCQs"/>
                <NextFeats title="Conversational Chatbot"/>
                <NextFeats title="Site Builder"/>
                <NextFeats title="3D Models Generation"/>
                <NextFeats title="Translation"/>
            </div>
            <div className="circlePosition w-[50vw] h-[50vw] bg-blue-500 rounded-[100%] absolute z-1 buttom-[50%] left-[10%] translate-x-[-50%] translate-y-[-50%] blur-[120px]"></div>
            <div className="min-h-[45vh] flex flex-col justify-center justify-items-center relative blurtext bg-[gray]/20 z-10 p-2 m-4 backdrop-blur-[50px] rounded-xl">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl text-center mt-6 font-bold">Book an appointment</h2>
                    <ul className="list-disc info mt-4 text-sm p-2 max-w-xl">
                        <li>If you have ideas to discuss.</li>
                        <li>If you have suggestions to add.</li>
                        <li>If you have problems that haven&#8216;t been solved using technology.</li>
                    </ul>
                    <p className="text-center info mt-4 text-sm p-2 max-w-xl">I&#8216;m open to disscuss new ideas and suggestion from different perspectives, feel free to book an appointment to discuss your ideas.</p>
                </div>
                <div className="flex justify-center items-center mt-24 flex-col ">
                    <p>Your ideas matters!</p>
                    <Link href="https://calendar.app.google/GCtgktUBNNAhH5JC9" target="_blank"><Button className="bg-blue-500">Let&#8216;s have a talk!</Button></Link>
                </div>
            </div>
            <h2 className="text-xl text-yellow-400 text-center">And there is more to go!</h2>
        </div>
    );
}
