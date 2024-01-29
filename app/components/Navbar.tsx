import Link from "next/link";
import { ModeToggle } from "./ModeToggle";


export default function Navbar(){
    return(
        <nav className="w-full relative flex items-center justify-between max-w-4xl mx-auto px-2 py-3">
            <Link href='/' className="font-bold text-3xl">
                Elios <span className="text-blue-500 text-sm">Ultimate AI platform</span>
            </Link>
            <div>
                <ModeToggle/>
            </div>
        </nav>
    )
}