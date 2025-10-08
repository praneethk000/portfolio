import "./globals.css";

export default function LandingPageLayout({ children }) {
    return (
        <div>
            <div>
                <div className="bg-black p-4 w-full h-screen">{children}</div>
            </div>
            <div>Footer</div>
        </div>
    );
}