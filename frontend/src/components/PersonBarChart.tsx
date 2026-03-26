"use client";

import { motion } from "framer-motion";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
    CartesianGrid,
} from "recharts";

const WAVE_COLORS = {
    alpha: "#56B79A",
    beta: "#3B6F8E",
    gamma: "#E67E22",
    theta: "#9B59B6",
};

export default function PersonBarChart({ data }: any) {
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-4 rounded-xl border border-[#D6E0E7] shadow-lg"
                >
                    <p className="text-sm font-semibold text-[#3B6F8E] mb-2">
                        Reading #{label}
                    </p>
                    {payload.map((entry: any, index: number) => (
                        <div key={index} className="flex items-center justify-between gap-4 text-xs">
                            <span style={{ color: entry.color }}>{entry.name}:</span>
                            <span className="font-semibold">{entry.value?.toFixed(2)}</span>
                        </div>
                    ))}
                </motion.div>
            );
        }
        return null;
    };

    return (
        <motion.div 
            className="w-full h-[320px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E6EDF2" />
                    <XAxis 
                        dataKey="index" 
                        stroke="#3B6F8E"
                        style={{ fontSize: '12px' }}
                        label={{ value: 'Reading Index', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                        stroke="#3B6F8E"
                        style={{ fontSize: '12px' }}
                        label={{ value: 'Wave Amplitude', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend 
                        wrapperStyle={{ fontSize: '14px', paddingTop: '10px' }}
                        iconType="line"
                    />

                    <Line 
                        dataKey="alpha" 
                        stroke={WAVE_COLORS.alpha}
                        strokeWidth={3}
                        dot={{ fill: WAVE_COLORS.alpha, r: 4 }}
                        activeDot={{ r: 6 }}
                        name="Alpha Wave"
                        animationDuration={1000}
                    />
                    <Line 
                        dataKey="beta" 
                        stroke={WAVE_COLORS.beta}
                        strokeWidth={3}
                        dot={{ fill: WAVE_COLORS.beta, r: 4 }}
                        activeDot={{ r: 6 }}
                        name="Beta Wave"
                        animationDuration={1200}
                    />
                    <Line 
                        dataKey="gamma" 
                        stroke={WAVE_COLORS.gamma}
                        strokeWidth={3}
                        dot={{ fill: WAVE_COLORS.gamma, r: 4 }}
                        activeDot={{ r: 6 }}
                        name="Gamma Wave"
                        animationDuration={1400}
                    />
                    <Line 
                        dataKey="theta" 
                        stroke={WAVE_COLORS.theta}
                        strokeWidth={3}
                        dot={{ fill: WAVE_COLORS.theta, r: 4 }}
                        activeDot={{ r: 6 }}
                        name="Theta Wave"
                        animationDuration={1600}
                    />
                </LineChart>
            </ResponsiveContainer>
        </motion.div>
    );
}