"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface StatsCardProps {
    title: string;
    value: number;
    color: string;
    trend?: "up" | "down" | "neutral";
    delay?: number;
}

export default function StatsCard({ title, value, color, trend = "neutral", delay = 0 }: StatsCardProps) {
    const getTrendIcon = () => {
        switch (trend) {
            case "up":
                return <TrendingUp size={16} className="text-green-500" />;
            case "down":
                return <TrendingDown size={16} className="text-red-500" />;
            default:
                return <Minus size={16} className="text-gray-400" />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-xl p-4 border border-[#D6E0E7] shadow-sm"
        >
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">{title}</span>
                {getTrendIcon()}
            </div>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
                className="flex items-baseline gap-2"
            >
                <span 
                    className="text-3xl font-bold"
                    style={{ color }}
                >
                    {value.toFixed(2)}
                </span>
                <span className="text-xs text-gray-400">Hz</span>
            </motion.div>
            <div className="mt-3 h-1 bg-[#E6EDF2] rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((value / 50) * 100, 100)}%` }}
                    transition={{ delay: delay + 0.4, duration: 0.8 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: color }}
                />
            </div>
        </motion.div>
    );
}
