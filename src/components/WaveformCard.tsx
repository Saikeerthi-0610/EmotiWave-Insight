"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

interface WaveformCardProps {
    title: string;
    frequency: string;
    description: string;
    value: number;
    color: string;
    delay?: number;
}

export default function WaveformCard({ 
    title, 
    frequency, 
    description, 
    value, 
    color, 
    delay = 0 
}: WaveformCardProps) {
    const percentage = Math.min((value / 50) * 100, 100);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="card"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${color}20` }}
                    >
                        <Activity style={{ color }} size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#3B6F8E]">{title}</h3>
                        <p className="text-sm text-gray-500">{frequency}</p>
                    </div>
                </div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: delay + 0.2, type: "spring" }}
                    className="text-2xl font-bold"
                    style={{ color }}
                >
                    {value.toFixed(2)} Hz
                </motion.div>
            </div>

            <p className="text-sm text-gray-600 mb-4">{description}</p>

            {/* Progress Bar */}
            <div className="relative h-3 bg-[#E6EDF2] rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ delay: delay + 0.4, duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: color }}
                />
            </div>

            {/* Waveform Visualization */}
            <div className="mt-4 h-16 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 200 60">
                    <motion.path
                        d={generateWaveform(title)}
                        stroke={color}
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: delay + 0.6, duration: 1.5 }}
                    />
                </svg>
            </div>
        </motion.div>
    );
}

function generateWaveform(waveType: string): string {
    const points: string[] = [];
    const width = 200;
    const height = 60;
    const centerY = height / 2;
    
    let frequency = 1;
    let amplitude = 15;
    
    switch (waveType) {
        case "Alpha Wave":
            frequency = 2;
            amplitude = 20;
            break;
        case "Beta Wave":
            frequency = 4;
            amplitude = 15;
            break;
        case "Gamma Wave":
            frequency = 6;
            amplitude = 10;
            break;
        case "Theta Wave":
            frequency = 1.5;
            amplitude = 18;
            break;
    }
    
    for (let x = 0; x <= width; x += 2) {
        const y = centerY + Math.sin((x / width) * Math.PI * 2 * frequency) * amplitude;
        points.push(`${x},${y}`);
    }
    
    return `M ${points.join(" L ")}`;
}
