import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Feedback() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post(
                "https://google-sheet-backend.vercel.app/sheets/add-row/",
                {
                values: [form.name, form.email, form.message],
                spreadsheet_id: "1Mywx_2HxYIJ9n0XsyGqOyANc9v1HI",
                sheet_name: "ChurchFeedback",
                }
            );

            navigate("/thanks");
        } catch (err) {
            alert("Submission failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <form
            onSubmit={submit}
            className="bg-white p-6 rounded-xl shadow w-full max-w-md"
        >
            <h2 className="text-2xl font-bold mb-4 text-center">
                Your Feedback
            </h2>

            <input
                className="w-full border p-2 rounded mb-3"
                placeholder="Name (optional)"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
                className="w-full border p-2 rounded mb-3"
                placeholder="Email (optional)"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <textarea
                className="w-full border p-2 rounded mb-4"
                placeholder="Your thoughts about 2025 at RCCG..."
                rows="4"
                required
                onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-2 rounded font-semibold"
            >
                {loading ? "Submitting..." : "Submit"}
            </button>
        </form>
        </div>
    );
}
