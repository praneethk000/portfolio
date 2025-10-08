"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/landingpage");
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <h1 className="text-4xl font-bold text-white animate-pulse">
        Welcome to My Portfolio 🚀
      </h1>
    </div>
  );
}
