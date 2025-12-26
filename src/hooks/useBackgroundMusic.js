// src/hooks/useBackgroundMusic.js
import { useRef, useState } from "react";

export default function useBackgroundMusic(src) {
  const audioRef = useRef(new Audio(src));
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  const start = () => {
    if (!started) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(() => {});
      setStarted(true);
    }
  };

  const toggleMute = () => {
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  return { start, toggleMute, muted };
}
