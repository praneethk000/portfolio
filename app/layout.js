import "./globals.css";
import LandingPage from "./landingpage/layout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <LandingPage />
      </body>
    </html>
  );
}
