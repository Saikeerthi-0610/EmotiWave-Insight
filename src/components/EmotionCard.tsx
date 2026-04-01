export default function EmotionCard() {
    return (
        <div className="card">
        <h2 className="text-lg mb-4 font-semibold">Detected Emotion</h2>

        <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-400">
            Calm
            </span>

            <span className="text-sm text-gray-400">
            Confidence: 92%
            </span>
        </div>
        </div>
    );
}