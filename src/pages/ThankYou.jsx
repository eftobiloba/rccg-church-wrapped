import { Link } from "react-router-dom";

export default function ThankYou() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-700 text-white text-center px-6">
        <h1 className="text-3xl font-bold mb-4">
            Thank You! 🙏
        </h1>
        <p className="mb-6">
            Your feedback means a lot to us.
        </p>

        <Link
            to="/"
            className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold"
        >
            Back to Home
        </Link>
        </div>
    );
}
