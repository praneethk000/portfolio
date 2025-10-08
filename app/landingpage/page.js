
import DrawnCircle from "@/components/DrawCircle";
import "./globals.css";

export default function LandingPage() {
    return (
        <div>
            <div className="flex justify-center text-white font-semibold text-2xl">Hello There!👋</div>
            <div>
                <div className="text-white font-semibold">Hello</div>
                <img src="/profile.JPG" alt="Profile Picture" className="flex float-right w-60 h-60 rounded-full object-cover mx-auto mt-4" />
                <DrawnCircle />
            </div>
        </div>
    )
}
