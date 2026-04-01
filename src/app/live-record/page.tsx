"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
    Activity, 
    Wifi, 
    WifiOff, 
    Download,
    Play,
    Pause,
    RotateCcw,
    Brain,
    Zap,
    Clock,
    Radio,
    Smile,
    Meh,
    Frown
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts";

export default function LiveRecordPage() {
    const [isConnected, setIsConnected] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const [signalQuality, setSignalQuality] = useState({ TP9: 0, AF7: 0, AF8: 0, TP10: 0 });
    const [liveData, setLiveData] = useState<any[]>([]);
    const [currentValues, setCurrentValues] = useState({ alpha: 0, beta: 0, gamma: 0, theta: 0 });
    const [emotionState, setEmotionState] = useState("Neutral");
    const [sessionData, setSessionData] = useState<any[]>([]);
    
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const recordingIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleConnect = () => {
        setIsConnected(true);
        setSignalQuality({
            TP9: 85 + Math.random() * 15,
            AF7: 85 + Math.random() * 15,
            AF8: 85 + Math.random() * 15,
            TP10: 85 + Math.random() * 15,
        });
    };

    const handleDisconnect = () => {
        setIsConnected(false);
        handleStopRecording();
    };

    const classifyEmotion = (alpha: number, beta: number, gamma: number, theta: number) => {
        const positiveScore = (alpha * 0.4) + (theta * 0.3) - (beta * 0.2) + (gamma * 0.1);
        const negativeScore = (beta * 0.5) + (gamma * 0.3) - (alpha * 0.2);
        const neutralScore = Math.abs(alpha - beta) < 5 && Math.abs(gamma - theta) < 5;
        
        if (neutralScore) return "Neutral";
        else if (positiveScore > negativeScore) return "Positive";
        else return "Negative";
    };

    const handleStartRecording = () => {
        setIsRecording(true);
        setRecordingTime(0);
        setSessionData([]);
        
        recordingIntervalRef.current = setInterval(() => {
            setRecordingTime(prev => prev + 1);
        }, 1000);

        intervalRef.current = setInterval(() => {
            const newAlpha = 8 + Math.random() * 5;
            const newBeta = 13 + Math.random() * 10;
            const newGamma = 30 + Math.random() * 20;
            const newTheta = 4 + Math.random() * 4;

            const newDataPoint = {
                timestamp: Date.now(),
                alpha: newAlpha,
                beta: newBeta,
                gamma: newGamma,
                theta: newTheta,
            };

            setCurrentValues({
                alpha: newAlpha,
                beta: newBeta,
                gamma: newGamma,
                theta: newTheta,
            });

            setLiveData(prev => {
                const updated = [...prev, newDataPoint];
                return updated.slice(-50);
            });

            setSessionData(prev => [...prev, newDataPoint]);
            setEmotionState(classifyEmotion(newAlpha, newBeta, newGamma, newTheta));

            setSignalQuality({
                TP9: 85 + Math.random() * 15,
                AF7: 85 + Math.random() * 15,
                AF8: 85 + Math.random() * 15,
                TP10: 85 + Math.random() * 15,
            });
        }, 200);
    };

    const handleStopRecording = () => {
        setIsRecording(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (recordingIntervalRef.current) clearInterval(recordingIntervalRef.current);
    };

    const handleReset = () => {
        setLiveData([]);
        setSessionData([]);
        setRecordingTime(0);
        setCurrentValues({ alpha: 0, beta: 0, gamma: 0, theta: 0 });
        setEmotionState("Neutral");
    };

    const handleDownloadSession = () => {
        const csv = [
            "timestamp,alpha,beta,gamma,theta",
            ...sessionData.map(d => `${d.timestamp},${d.alpha},${d.beta},${d.gamma},${d.theta}`)
        ].join("\n");
        
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `muse-session-${Date.now()}.csv`;
        a.click();
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const getSignalQualityColor = (quality: number) => {
        if (quality >= 80) return "#56B79A";
        if (quality >= 50) return "#E67E22";
        return "#E74C3C";
    };

    const getEmotionInfo = () => {
        switch (emotionState) {
            case "Positive":
                return { icon: Smile, color: "#56B79A", bg: "#56B79A20" };
            case "Negative":
                return { icon: Frown, color: "#E74C3C", bg: "#E74C3C20" };
            default:
                return { icon: Meh, color: "#95A5A6", bg: "#95A5A620" };
        }
    };

    const emotionInfo = getEmotionInfo();
    const EmotionIcon = emotionInfo.icon;

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (recordingIntervalRef.current) clearInterval(recordingIntervalRef.current);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#F4F7F9] relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-96 h-96 bg-[#56B79A] rounded-full opacity-5 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-[#3B6F8E] rounded-full opacity-5 blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -50, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-8">
                {/* Header */}
                <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#56B79A20] to-[#3B6F8E20] rounded-full mb-4 border border-[#56B79A30]"
                    >
                        <Radio className="text-[#56B79A]" size={18} />
                        <span className="text-[#3B6F8E] font-semibold text-sm">Live Neural Monitoring</span>
                    </motion.div>
                    <h1 className="text-4xl font-bold text-[#3B6F8E] mb-2">
                        Real-Time EEG Recording
                    </h1>
                    <p className="text-gray-600">Monitor live neural signals with Muse headband</p>
                </motion.div>

                {/* Status Bar */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div 
                        className={`card p-5 border-l-4 ${isConnected ? "border-[#56B79A]" : "border-gray-400"}`}
                        whileHover={{ y: -3 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-600 mb-1">Device Status</p>
                                <p className={`text-xl font-bold ${isConnected ? "text-[#56B79A]" : "text-gray-500"}`}>
                                    {isConnected ? "Connected" : "Disconnected"}
                                </p>
                            </div>
                            {isConnected ? (
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Wifi className="text-[#56B79A]" size={28} />
                                </motion.div>
                            ) : (
                                <WifiOff className="text-gray-400" size={28} />
                            )}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="card p-5"
                        whileHover={{ y: -3 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-600 mb-1">Recording Time</p>
                                <p className="text-xl font-bold text-[#3B6F8E]">{formatTime(recordingTime)}</p>
                            </div>
                            <Clock className="text-[#3B6F8E]" size={28} />
                        </div>
                    </motion.div>

                    <motion.div 
                        className="card p-5"
                        whileHover={{ y: -3 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-600 mb-1">Data Points</p>
                                <p className="text-xl font-bold text-[#3B6F8E]">{sessionData.length}</p>
                            </div>
                            <Activity className="text-[#56B79A]" size={28} />
                        </div>
                    </motion.div>

                    <motion.div 
                        className="card p-5"
                        style={{ backgroundColor: emotionInfo.bg }}
                        whileHover={{ y: -3 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-600 mb-1">Emotion</p>
                                <p className="text-xl font-bold" style={{ color: emotionInfo.color }}>
                                    {emotionState}
                                </p>
                            </div>
                            <EmotionIcon style={{ color: emotionInfo.color }} size={28} />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Device Connection */}
                    <motion.div 
                        className="card"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-xl flex items-center justify-center">
                                <Brain className="text-white" size={20} />
                            </div>
                            <h2 className="text-lg font-bold text-[#3B6F8E]">Muse Device</h2>
                        </div>
                        
                        {!isConnected ? (
                            <div className="text-center py-6">
                                <div className="w-16 h-16 bg-[#3B6F8E20] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Brain className="text-[#3B6F8E]" size={32} />
                                </div>
                                <p className="text-sm text-gray-600 mb-6">Connect your Muse headband</p>
                                <motion.button
                                    onClick={handleConnect}
                                    className="btn-primary px-6 py-3 w-full"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Connect Device
                                </motion.button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {/* Signal Quality */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-600 mb-3">Signal Quality</h3>
                                    <div className="space-y-3">
                                        {Object.entries(signalQuality).map(([electrode, quality]) => (
                                            <div key={electrode}>
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-xs font-semibold text-gray-600">{electrode}</span>
                                                    <span 
                                                        className="text-xs font-bold"
                                                        style={{ color: getSignalQualityColor(quality) }}
                                                    >
                                                        {quality.toFixed(0)}%
                                                    </span>
                                                </div>
                                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full rounded-full"
                                                        style={{ backgroundColor: getSignalQualityColor(quality) }}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${quality}%` }}
                                                        transition={{ duration: 0.5 }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <motion.button
                                    onClick={handleDisconnect}
                                    className="btn-secondary w-full py-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Disconnect
                                </motion.button>
                            </div>
                        )}
                    </motion.div>

                    {/* Recording Controls */}
                    <motion.div 
                        className="lg:col-span-2 card"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[#56B79A20] rounded-xl flex items-center justify-center">
                                <Zap className="text-[#56B79A]" size={20} />
                            </div>
                            <h2 className="text-lg font-bold text-[#3B6F8E]">Recording Controls</h2>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <motion.button
                                onClick={isRecording ? handleStopRecording : handleStartRecording}
                                disabled={!isConnected}
                                className={`flex flex-col items-center gap-3 p-6 rounded-2xl transition-all ${
                                    isRecording 
                                        ? "bg-gradient-to-br from-[#E74C3C] to-[#C0392B] text-white shadow-lg" 
                                        : "bg-gradient-to-br from-[#56B79A] to-[#3B6F8E] text-white shadow-lg"
                                } disabled:opacity-50 disabled:cursor-not-allowed`}
                                whileHover={isConnected ? { scale: 1.05, y: -5 } : {}}
                                whileTap={isConnected ? { scale: 0.95 } : {}}
                            >
                                {isRecording ? <Pause size={32} /> : <Play size={32} />}
                                <span className="text-sm font-bold">
                                    {isRecording ? "Stop" : "Start"}
                                </span>
                            </motion.button>

                            <motion.button
                                onClick={handleReset}
                                disabled={isRecording}
                                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#3B6F8E] text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                whileHover={!isRecording ? { scale: 1.05, y: -5 } : {}}
                                whileTap={!isRecording ? { scale: 0.95 } : {}}
                            >
                                <RotateCcw size={32} />
                                <span className="text-sm font-bold">Reset</span>
                            </motion.button>

                            <motion.button
                                onClick={handleDownloadSession}
                                disabled={sessionData.length === 0}
                                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-[#56B79A] to-[#3B6F8E] text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                whileHover={sessionData.length > 0 ? { scale: 1.05, y: -5 } : {}}
                                whileTap={sessionData.length > 0 ? { scale: 0.95 } : {}}
                            >
                                <Download size={32} />
                                <span className="text-sm font-bold">Save</span>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Live Waveforms */}
                <motion.div 
                    className="card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-xl flex items-center justify-center">
                            <Activity className="text-white" size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-[#3B6F8E]">Live EEG Waveforms</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { key: "alpha", label: "Alpha", color: "#56B79A", domain: [0, 20] },
                            { key: "beta", label: "Beta", color: "#3B6F8E", domain: [0, 40] },
                            { key: "gamma", label: "Gamma", color: "#E67E22", domain: [0, 60] },
                            { key: "theta", label: "Theta", color: "#9B59B6", domain: [0, 15] }
                        ].map((wave, index) => (
                            <motion.div
                                key={wave.key}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-semibold" style={{ color: wave.color }}>
                                        {wave.label} Wave
                                    </h3>
                                    <span className="text-2xl font-bold" style={{ color: wave.color }}>
                                        {currentValues[wave.key as keyof typeof currentValues].toFixed(2)} Hz
                                    </span>
                                </div>
                                <div className="h-32 bg-[#F4F7F9] rounded-xl overflow-hidden border border-[#D6E0E7]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={liveData}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#D6E0E7" />
                                            <XAxis hide />
                                            <YAxis hide domain={wave.domain} />
                                            <Line 
                                                type="monotone" 
                                                dataKey={wave.key} 
                                                stroke={wave.color} 
                                                strokeWidth={3}
                                                dot={false}
                                                isAnimationActive={false}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
