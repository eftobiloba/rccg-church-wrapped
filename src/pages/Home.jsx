import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    const generateLink = () => {
        if (!name.trim()) return;
        const encoded = encodeURIComponent(name.trim());
        setLink(`${window.location.origin}/invite/${encoded}`);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-purple-700 to-indigo-800 text-white flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">
                RCCG Citadel of His Glory
            </h1>
            <p className="text-xl mb-8">✨ 2025 Wrapped ✨</p>

            <p>See you in 2026!</p>
        </div>
    );
}
