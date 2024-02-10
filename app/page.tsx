import HomeCard from "./components/HomeCard";
import NextFeats from "./components/NextFeats";

export default function Home() {
    return (
        <div>
            <h1>Elios
                <span>Ultimate Generative AI website</span>
            </h1>
            <div className="py-4 grid grid-cols-2 justify-center justify-items-center gap-4 relative">
                <HomeCard title="Text Generation" href="text"/>
                <HomeCard title="Image Generation" href="image"/>
                <HomeCard title="Summarize Text" href="summarize"/>
                <NextFeats title="Conversational Chatbot"/>
                <NextFeats title="Disease Symptoms Classification"/>
                <NextFeats title="Skin Disease Lesions Classification"/>
                <NextFeats title="3D Models Generation"/>
                <NextFeats title="Translation"/>
            </div>
            <h2 className="text-xl text-yellow-400">And there is more to go!</h2>
        </div>
    );
}
