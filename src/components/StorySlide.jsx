import InviteStory from "./stories/InviteStory";
import FeedbackStory from "./stories/FeedbackStory";

export default function StorySlide({ story }) {
    const isFirst = story.id === 0;

    if (story.type === "feedback") return <FeedbackStory />;
    if (story.type === "invite") return <InviteStory />;

    return (
        <div className="h-full w-full relative flex items-center justify-center overflow-hidden bg-black">

            {/* Top user info */}
            <div className="absolute top-4 left-4 right-4 flex items-center gap-3 z-20">
                <img
                src="/logo.png" // Replace with your logo path
                alt="User Logo"
                className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-white font-semibold text-sm">RCCG COHG</span>
            </div>

            {/* Image */}
            <img
                src={story.image}
                alt=""
                className={`
                absolute inset-0 w-full h-full
                ${story.fit === "cover" ? "object-cover" : "object-contain"}
                ${isFirst ? "animate-zoom-in" : ""}
                `}
            />

            {isFirst && <div className="absolute inset-0 bg-black/40" />}

            {/* Animated text */}
            <div
                className={`
                relative z-10 text-white text-center px-6
                ${isFirst ? "animate-fade-up" : ""}
                `}
            >
                {story.title && (
                <h1 className="text-3xl font-bold mb-3">{story.title}</h1>
                )}
                {story.subtitle && <p className="text-lg">{story.subtitle}</p>}
            </div>

            {story.caption && (
                <div className="absolute bottom-20 left-0 right-0 px-6 text-white text-center z-10">
                <p className="text-sm">{story.caption}</p>
                </div>
            )}
        </div>
    );
}
