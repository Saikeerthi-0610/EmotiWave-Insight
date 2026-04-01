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

const COLORS = ["#56B79A", "#3B6F8E", "#E67E22", "#9B59B6", "#E74C3C"];

export default function EEGGraph({ data, onSelect }: any) {
    const persons = [...new Set(data.map((d: any) => d.person))];

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-3 rounded-xl border border-[#D6E0E7] shadow-lg"
                >
                    <p className="text-sm font-semibold text-[#3B6F8E]">
                        {payload[0].payload.person}
                    </p>
                    <p className="text-xs text-gray-600">
                        Alpha: {payload[0].value?.toFixed(2)}
                    </p>
                </motion.div>
            );
        }
        return null;
    };

    return (
        <motion.div 
            className="w-full h-[320px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <ResponsiveContainer>
                <LineChart>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E6EDF2" />
                    <XAxis 
                        dataKey="index" 
                        stroke="#3B6F8E"
                        style={{ fontSize: '12px' }}
                    />
                    <YAxis 
                        stroke="#3B6F8E"
                        style={{ fontSize: '12px' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend 
                        wrapperStyle={{ fontSize: '14px' }}
                        iconType="line"
                    />

                    {persons.map((p: string, index: number) => (
                        <Line
                            key={p}
                            data={data.filter((d: any) => d.person === p)}
                            dataKey="alpha"
                            name={p}
                            stroke={COLORS[index % COLORS.length]}
                            strokeWidth={3}
                            dot={{ fill: COLORS[index % COLORS.length], r: 4 }}
                            activeDot={{ r: 6 }}
                            onClick={() => onSelect(p)}
                            style={{ cursor: 'pointer' }}
                            animationDuration={1000}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </motion.div>
    );
}