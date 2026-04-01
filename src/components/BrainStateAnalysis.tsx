"use client";

import { motion } from "framer-motion";
import { Smile, Meh, Frown, Zap, Brain } from "lucide-react";

interface BrainStateAnalysisProps {
    state: string;
    averages: {
        alpha: number;
        beta: number;
        gamma: number;
        theta: number;
    };
}

export default function BrainStateAnalysis({ state, averages }: BrainStateAnalysisProps) {
    const getStateInfo = () => {
        switch (state) {
            case "Positive":
                return {
                    icon: Smile,
                    color: "#56B79A",
                    bgColor: "#56B79A20",
                    borderColor: "#56B79A",
                    title: "Positive Emotion Detected",
                    description: "The hybrid BiGRU + BiLSTM model detected positive emotional patterns in your EEG signals. High alpha and theta activity with balanced beta waves indicate a pleasant, relaxed emotional state.",
                    recommendations: [
                        "Maintain this positive state through mindfulness",
                        "Good time for social interactions and creative work",
                        "Consider activities that sustain this emotional balance"
                    ],
                    indicators: [
                        { label: "Relaxation", value: "High", color: "#56B79A" },
                        { label: "Stress Level", value: "Low", color: "#56B79A" },
                        { label: "Emotional Valence", value: "Positive", color: "#56B79A" }
                    ]
                };
            case "Negative":
                return {
                    icon: Frown,
                    color: "#E74C3C",
                    bgColor: "#E74C3C20",
                    borderColor: "#E74C3C",
                    title: "Negative Emotion Detected",
                    description: "The hybrid model identified negative emotional patterns. Elevated beta and gamma activity with reduced alpha waves suggest stress, anxiety, or negative emotional state.",
                    recommendations: [
                        "Consider relaxation techniques or breathing exercises",
                        "Take breaks and engage in stress-reducing activities",
                        "Seek support if negative emotions persist"
                    ],
                    indicators: [
                        { label: "Stress Level", value: "Elevated", color: "#E74C3C" },
                        { label: "Anxiety", value: "Present", color: "#E74C3C" },
                        { label: "Emotional Valence", value: "Negative", color: "#E74C3C" }
                    ]
                };
            case "Neutral":
                return {
                    icon: Meh,
                    color: "#95A5A6",
                    bgColor: "#95A5A620",
                    borderColor: "#95A5A6",
                    title: "Neutral Emotional State",
                    description: "The BiGRU + BiLSTM analysis shows balanced brain wave activity across all frequency bands. This indicates a neutral, stable emotional baseline without strong positive or negative valence.",
                    recommendations: [
                        "Stable baseline state - ready for various activities",
                        "Good foundation for emotional regulation",
                        "Flexible state for adapting to different tasks"
                    ],
                    indicators: [
                        { label: "Balance", value: "Optimal", color: "#95A5A6" },
                        { label: "Stability", value: "High", color: "#95A5A6" },
                        { label: "Emotional Valence", value: "Neutral", color: "#95A5A6" }
                    ]
                };
            default:
                return {
                    icon: Brain,
                    color: "#3B6F8E",
                    bgColor: "#3B6F8E20",
                    borderColor: "#3B6F8E",
                    title: "Awaiting Analysis",
                    description: "Upload EEG data to begin emotion classification.",
                    recommendations: [],
                    indicators: []
                };
        }
    };

    const stateInfo = getStateInfo();
    const StateIcon = stateInfo.icon;

    const dominantWave = Object.entries(averages).reduce((a, b) => 
        averages[a[0] as keyof typeof averages] > averages[b[0] as keyof typeof averages] ? a : b
    )[0];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card relative overflow-hidden"
            style={{ borderLeft: `4px solid ${stateInfo.borderColor}` }}
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5" style={{ background: `radial-gradient(circle, ${stateInfo.color} 0%, transparent 70%)` }}></div>

            <div className="relative z-10">
                <div className="flex items-start gap-6">
                    <motion.div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        style={{ backgroundColor: stateInfo.bgColor }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <StateIcon style={{ color: stateInfo.color }} size={40} />
                    </motion.div>

                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-2xl font-bold text-[#3B6F8E]">
                                {stateInfo.title}
                            </h3>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="px-5 py-2 rounded-xl font-bold text-lg shadow-md"
                                style={{ 
                                    backgroundColor: stateInfo.color,
                                    color: "white"
                                }}
                            >
                                {state}
                            </motion.div>
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                            {stateInfo.description}
                        </p>

                        {state !== "Idle" && (
                            <>
                                {/* Emotion Indicators */}
                                {stateInfo.indicators && stateInfo.indicators.length > 0 && (
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {stateInfo.indicators.map((indicator, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 * index }}
                                                className="p-3 bg-[#F4F7F9] rounded-xl"
                                            >
                                                <p className="text-xs text-gray-600 mb-1">{indicator.label}</p>
                                                <p className="text-lg font-bold" style={{ color: indicator.color }}>
                                                    {indicator.value}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}

                                {/* Dominant Wave */}
                                <div className="mb-6 p-4 bg-gradient-to-r from-[#3B6F8E10] to-[#56B79A10] rounded-xl border border-[#D6E0E7]">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Dominant Frequency Band</p>
                                            <p className="text-xl font-bold text-[#3B6F8E]">
                                                {dominantWave.charAt(0).toUpperCase() + dominantWave.slice(1)} Wave
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-[#56B79A]">
                                                {averages[dominantWave as keyof typeof averages].toFixed(2)}
                                            </p>
                                            <p className="text-xs text-gray-600">Hz</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Model Info */}
                                <div className="mb-6 p-4 bg-white rounded-xl border border-[#D6E0E7]">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Brain className="text-[#3B6F8E]" size={20} />
                                        <h4 className="text-sm font-bold text-[#3B6F8E]">
                                            Classification Model
                                        </h4>
                                    </div>
                                    <p className="text-xs text-gray-600 mb-2">
                                        Hybrid BiGRU + BiLSTM Architecture
                                    </p>
                                    <div className="flex items-center gap-4 text-xs">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#56B79A]"></div>
                                            <span className="text-gray-600">Accuracy: 98.59%</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#3B6F8E]"></div>
                                            <span className="text-gray-600">3-Class Emotion Detection</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Recommendations */}
                                {stateInfo.recommendations.length > 0 && (
                                    <div>
                                        <h4 className="text-sm font-bold text-[#3B6F8E] mb-3 flex items-center gap-2">
                                            <Zap size={18} />
                                            Recommendations
                                        </h4>
                                        <ul className="space-y-2">
                                            {stateInfo.recommendations.map((rec, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 * index }}
                                                    className="text-sm text-gray-700 flex items-start gap-3 p-2 rounded-lg hover:bg-[#F4F7F9] transition-colors"
                                                >
                                                    <span className="text-[#56B79A] font-bold mt-0.5">•</span>
                                                    {rec}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
