import HomeCard from "./components/HomeCard";

export default function Home() {
    return (
        <div>
            <h1>Elios
                <span>Ultimate Generative AI website</span>
            </h1>
            <div
                className="py-4 grid grid-cols-2 justify-center justify-items-center gap-4 relative">
                <HomeCard title="Chat" href="chat"/>
                <HomeCard title="Image Generation" href="image"/>
                <HomeCard title="Music Generation" href="music"/>
                <HomeCard title="Summarize Text" href="summarize"/>
                <HomeCard title="Skin Disease symptoms classification" href="skin2symptom"/>
                <HomeCard title="Skin Disease lesions classification" href="skin-lesion"/>
            </div>
        </div>
    );
}
