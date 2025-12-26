import { useParams, Link } from "react-router-dom";

export default function Invite() {
    const { name } = useParams();
    const decodedName = decodeURIComponent(name);

    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-700 to-purple-700 text-white flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">
            {decodedName} is inviting you to
        </h1>

        <p className="text-2xl font-semibold mb-6">
            RCCG, Citadel of His Glory ❤️
        </p>

        <Link
            to="/wrapped"
            className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold"
        >
            View 2025 Wrapped
        </Link>
        </div>
    );
}
