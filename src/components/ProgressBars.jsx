// src/components/ProgressBars.jsx
export default function ProgressBars({ total, current }) {
    return (
        <div className="absolute top-2 left-2 right-2 flex gap-1 z-30">
        {Array.from({ length: total }).map((_, i) => (
            <div key={i} className="flex-1 h-1 bg-white/30 rounded">
            {i <= current && (
                <div className="h-full bg-white rounded" />
            )}
            </div>
        ))}
        </div>
    );
}
