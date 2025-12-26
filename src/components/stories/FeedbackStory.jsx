// src/components/stories/FeedbackStory.jsx
import Feedback from "../../pages/Feedback";

export default function FeedbackStory() {
    return (
        <div className="h-full bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white rounded-xl shadow w-full max-w-sm">
                <Feedback />
            </div>
        </div>
    );
}
