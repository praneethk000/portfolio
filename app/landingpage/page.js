"use client";

export default function LandingPage() {
    return (
        <div>
            <div className="flex justify-center text-white font-semibold text-2xl">Hello There!👋</div>
            <div>
                <div className="text-white font-semibold">Hello</div>


            </div>
            <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-950 text-white">
                <div className="card-wrapper h-[300px] w-[300px]">
                    <div className="card-content flex items-center justify-center text-xs">
                        <div className="max-w-[60%] text-center">
                            <img src="/profile.JPG" alt="Profile Picture" className="w-60 h-60 rounded-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
