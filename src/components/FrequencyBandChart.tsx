"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from "recharts";

interface FrequencyBandChartProps {
    data: any[];
}

const COLORS = {
    alpha: "#56B79A",
    beta: "#3B6F8E",
    gamma: "#E67E22",
    theta: "#9B59B6",
};

export default function FrequencyBandChart({ data }: FrequencyBandChartProps) {
    const averages = {
        alpha: data.reduce((s, d) => s + d.alpha, 0) / data.length,
        beta: data.reduce((s, d) => s + d.beta, 0) / data.length,
        gamma: data.reduce((s, d) => s + d.gamma, 0) / data.length,
        theta: data.reduce((s, d) => s + d.theta, 0) / data.length,
    };

    const chartData = [
        { name: "Alpha", value: averages.alpha, color: COLORS.alpha },
        { name: "Beta", value: averages.beta, color: COLORS.beta },
        { name: "Gamma", value: averages.gamma, color: COLORS.gamma },
        { name: "Theta", value: averages.theta, color: COLORS.theta },
    ];

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-3 rounded-xl border border-[#D6E0E7] shadow-lg"
                >
                    <p className="text-sm font-semibold text-[#3B6F8E]">
                        {payload[0].payload.name} Wave
                    </p>
                    <p className="text-xs text-gray-600">
                        {payload[0].value.toFixed(2)} Hz
                    </p>
                </motion.div>
            );
        }
        return null;
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[300px]"
        >
            <ResponsiveContainer>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E6EDF2" />
                    <XAxis 
                        dataKey="name" 
                        stroke="#3B6F8E"
                        style={{ fontSize: '14px', fontWeight: 600 }}
                    />
                    <YAxis 
                        stroke="#3B6F8E"
                        style={{ fontSize: '12px' }}
                        label={{ value: 'Frequency (Hz)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                        dataKey="value" 
                        radius={[8, 8, 0, 0]}
                        animationDuration={1000}
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </motion.div>
    );
}
