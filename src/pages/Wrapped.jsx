// src/pages/Wrapped.jsx
import { useState, useEffect } from "react";
import { stories } from "../data/stories";
import StorySlide from "../components/StorySlide";
import ProgressBars from "../components/ProgressBars";
import useBackgroundMusic from "../hooks/useBackgroundMusic";

// Heroicons
import { ShareIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

export default function Wrapped() {
    const { start, toggleMute, muted } = useBackgroundMusic("/music/wrapped.mp3");
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index < stories.length - 1) setIndex(index + 1);
    };

    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    // Start music automatically
    useEffect(() => {
        start();
    }, [start]);

    return (
        <div className="fixed inset-0 flex items-center justify-center
                        bg-linear-to-br from-purple-900 via-indigo-900 to-black
                        sm:bg-black">
            <div className="relative w-full max-w-md h-full sm:h-[90vh] rounded-lg overflow-hidden shadow-xl">

                {/* Progress */}
                <ProgressBars total={stories.length} current={index} />

                {/* Navigation zones */}
                <div className="absolute inset-0 flex z-20 cursor-pointer">
                    <div className="w-1/2" onClick={prev} />
                    <div className="w-1/2" onClick={next} />
                </div>

                {/* Slide */}
                <StorySlide story={stories[index]} />

                {/* Persistent actions */}
                <div className="absolute bottom-4 left-0 right-0 px-4 flex gap-3 z-30 justify-center">
                    <a
                        href="https://forms.gle/SDskuXBCC5zruD3R9"
                        className="flex-1 bg-white/90 text-black py-2 rounded-full text-center text-sm font-semibold"
                    >
                        Leave Feedback
                    </a>

                    {/* Share Icon */}
                    <button
                        onClick={() => navigator.share?.({ url: window.location.href })}
                        className="bg-white/90 p-2 rounded-full flex items-center justify-center"
                        title="Share"
                    >
                        <ShareIcon className="w-5 h-5 text-black" />
                    </button>

                    {/* Mute/Unmute Icon */}
                    <button
                        onClick={toggleMute}
                        className="bg-white/90 p-2 rounded-full flex items-center justify-center"
                        title={muted ? "Unmute" : "Mute"}
                    >
                        {muted ? (
                            <SpeakerXMarkIcon className="w-5 h-5 text-black" />
                        ) : (
                            <SpeakerWaveIcon className="w-5 h-5 text-black" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
