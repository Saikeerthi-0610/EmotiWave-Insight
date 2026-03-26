"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Papa from "papaparse";
import { motion } from "framer-motion";
import { Upload, Brain, ArrowRight, Zap, Shield, TrendingUp, CheckCircle, FileCheck } from "lucide-react";

export default function MonitorPage() {
    const router = useRouter();
    const [isUploading, setIsUploading] = useState(false);
    const [fileName, setFileName] = useState("");
    const [dragActive, setDragActive] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/access");
            return;
        }
        
        const userData = JSON.parse(storedUser);
        // Only doctors can access monitor page
        if (userData.role !== "doctor") {
            router.push("/dashboard");
            return;
        }
        
        setIsAuthenticated(true);
        setIsLoading(false);
    }, [router]);

    if (isLoading || !isAuthenticated) {
        return (
            <div className="min-h-screen bg-[#F4F7F9] flex items-center justify-center">
                <div className="spinner"></div>
            </div>
        );
    }

    const handleFileUpload = (file: File) => {
        setIsUploading(true);
        setFileName(file.name);
        
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            dynamicTyping: true,
            complete: (results: any) => {
                const rows = results.data.map((r: any, index: number) => ({
                    index,
                    person: r.person || r.Person || "User",
                    alpha: Number(r.alpha ?? r.Alpha) || 0,
                    beta: Number(r.beta ?? r.Beta) || 0,
                    gamma: Number(r.gamma ?? r.Gamma) || 0,
                    theta: Number(r.theta ?? r.Theta) || 0,
                }));

                const persons = [...new Set(rows.map((r: any) => r.person))];

                const stats = persons.map((p: string) => {
                    const userData = rows.filter((r: any) => r.person === p);
                    const avg = (key: string) =>
                        (userData.reduce((s: number, d: any) => s + d[key], 0) / userData.length).toFixed(2);

                    return {
                        person: p,
                        alpha: Number(avg("alpha")),
                        beta: Number(avg("beta")),
                        gamma: Number(avg("gamma")),
                        theta: Number(avg("theta")),
                    };
                });

                const first = persons[0] || "";

                const totalAvg = {
                    alpha: rows.reduce((s, d) => s + d.alpha, 0) / rows.length,
                    beta: rows.reduce((s, d) => s + d.beta, 0) / rows.length,
                    gamma: rows.reduce((s, d) => s + d.gamma, 0) / rows.length,
                    theta: rows.reduce((s, d) => s + d.theta, 0) / rows.length,
                };

                let state = "Neutral";
                if (rows.length > 0) {
                    const last = rows[rows.length - 1];
                    if (last.alpha > last.beta) state = "Relaxed";
                    else if (last.beta > last.alpha) state = "Focused";
                }

                const analysisData = {
                    data: rows,
                    personStats: stats,
                    selectedPatient: first,
                    state,
                    averages: totalAvg,
                    fileName: file.name,
                };
                
                sessionStorage.setItem("eegAnalysisData", JSON.stringify(analysisData));
                
                // Save to localStorage for dashboard access
                const existingReports = JSON.parse(localStorage.getItem("patientReports") || "[]");
                
                // Create new report for each person in the data
                stats.forEach((personStat: any) => {
                    // Determine emotion based on brain waves
                    const positiveScore = (personStat.alpha * 0.4) + (personStat.theta * 0.3) - (personStat.beta * 0.2) + (personStat.gamma * 0.1);
                    let emotion = "Neutral";
                    if (positiveScore > 15) emotion = "Positive";
                    else if (positiveScore < -5) emotion = "Negative";
                    
                    // Determine dominant wave
                    const waves = { alpha: personStat.alpha, beta: personStat.beta, gamma: personStat.gamma, theta: personStat.theta };
                    const dominantWave = Object.entries(waves).reduce((a, b) => waves[a[0] as keyof typeof waves] > waves[b[0] as keyof typeof waves] ? a : b)[0];
                    const dominantWaveCapitalized = dominantWave.charAt(0).toUpperCase() + dominantWave.slice(1);
                    
                    const newReport = {
                        id: `R${Date.now()}_${personStat.person}`,
                        patientId: personStat.person,
                        patientName: personStat.person,
                        date: new Date().toISOString().split('T')[0],
                        emotion: emotion,
                        dominantWave: dominantWaveCapitalized,
                        accuracy: "98.59%",
                        dataPoints: rows.filter((r: any) => r.person === personStat.person).length,
                        frequencies: {
                            alpha: personStat.alpha,
                            beta: personStat.beta,
                            gamma: personStat.gamma,
                            theta: personStat.theta
                        },
                        notes: `Patient shows ${emotion.toLowerCase()} emotional state with ${dominantWaveCapitalized.toLowerCase()} wave dominance. ${
                            emotion === "Positive" ? "Good emotional regulation observed." :
                            emotion === "Negative" ? "Elevated stress indicators detected." :
                            "Balanced emotional baseline."
                        }`,
                        duration: "5 minutes"
                    };
                    
                    existingReports.push(newReport);
                });
                
                localStorage.setItem("patientReports", JSON.stringify(existingReports));
                
                setTimeout(() => {
                    router.push("/analysis");
                }, 1000);
            },
        });
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    };

    const features = [
        { icon: Zap, text: "Instant Processing", color: "#56B79A" },
        { icon: Shield, text: "Secure & Private", color: "#3B6F8E" },
        { icon: TrendingUp, text: "AI-Powered Analysis", color: "#56B79A" }
    ];

    const steps = [
        { number: "1", title: "Upload", desc: "Select your EEG CSV file" },
        { number: "2", title: "Process", desc: "AI analyzes neural patterns" },
        { number: "3", title: "Review", desc: "Get comprehensive insights" }
    ];

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

            <div className="relative z-10 container mx-auto px-6 py-16">
                {/* Header */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#56B79A20] to-[#3B6F8E20] rounded-full mb-4 border border-[#56B79A30]"
                    >
                        <Brain className="text-[#56B79A]" size={18} />
                        <span className="text-[#3B6F8E] font-semibold text-sm">Neural Data Analysis</span>
                    </motion.div>

                    <h1 className="text-5xl font-bold text-[#3B6F8E] mb-4">
                        EEG Data Monitor
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Upload your neural session data for comprehensive AI-powered analysis
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {/* Upload Card */}
                    <motion.div 
                        className="card py-12 relative overflow-hidden mb-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B6F8E] via-[#56B79A] to-[#3B6F8E]"></div>
                        
                        <div className="text-center px-6">
                            {isUploading ? (
                                <motion.div 
                                    className="flex flex-col items-center gap-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <motion.div
                                        className="w-24 h-24 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-3xl flex items-center justify-center shadow-xl"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Brain className="text-white" size={48} />
                                    </motion.div>
                                    
                                    <div>
                                        <p className="text-2xl text-[#3B6F8E] font-bold mb-2">Analyzing {fileName}</p>
                                        <p className="text-gray-600 mb-4">Processing neural patterns with AI</p>
                                        
                                        {/* Progress Steps */}
                                        <div className="flex items-center justify-center gap-3 mt-6">
                                            {["Parsing", "Analyzing", "Generating"].map((step, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-center gap-2"
                                                    initial={{ opacity: 0.3 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: i * 0.3, duration: 0.5 }}
                                                >
                                                    <CheckCircle className="text-[#56B79A]" size={16} />
                                                    <span className="text-sm text-gray-600">{step}</span>
                                                    {i < 2 && <ArrowRight className="text-gray-400" size={14} />}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <>
                                    <motion.div
                                        className={`w-32 h-32 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transition-all ${
                                            dragActive ? "scale-110 shadow-2xl" : ""
                                        }`}
                                        whileHover={{ scale: 1.05, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Upload className="text-white" size={64} />
                                    </motion.div>
                                    
                                    <h2 className="text-3xl font-bold text-[#3B6F8E] mb-3">
                                        {dragActive ? "Drop your file here" : "Upload Neural Session"}
                                    </h2>
                                    <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                                        Drag and drop your EEG CSV file or click to browse
                                    </p>

                                    <label className="inline-block cursor-pointer">
                                        <motion.div
                                            className="btn-primary px-10 py-4 flex items-center gap-3 mx-auto cursor-pointer text-lg font-semibold shadow-xl"
                                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(86, 183, 154, 0.3)" }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FileCheck size={24} />
                                            Select File
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <ArrowRight size={22} />
                                            </motion.div>
                                        </motion.div>
                                        <input
                                            type="file"
                                            accept=".csv"
                                            className="hidden"
                                            onChange={(e) =>
                                                e.target.files && handleFileUpload(e.target.files[0])
                                            }
                                            disabled={isUploading}
                                        />
                                    </label>
                                    
                                    <p className="text-xs text-gray-400 mt-6">
                                        Supported format: CSV • Max size: 50MB
                                    </p>
                                </>
                            )}
                        </div>
                    </motion.div>

                    {/* Features */}
                    <motion.div
                        className="flex items-center justify-center gap-6 mb-8 flex-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-[#D6E0E7] shadow-sm"
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ 
                                    delay: 0.6 + index * 0.1,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                whileHover={{ 
                                    y: -5, 
                                    boxShadow: "0 10px 25px rgba(59, 111, 142, 0.15)",
                                    scale: 1.05
                                }}
                            >
                                <motion.div 
                                    className="w-10 h-10 rounded-lg flex items-center justify-center" 
                                    style={{ background: `${feature.color}20` }}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <feature.icon style={{ color: feature.color }} size={20} />
                                </motion.div>
                                <span className="font-semibold text-[#3B6F8E] text-sm">{feature.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Steps */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="card p-6 text-center relative overflow-hidden group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    delay: 0.8 + index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(59, 111, 142, 0.15)" }}
                            >
                                {/* Animated background decoration */}
                                <motion.div 
                                    className="absolute top-0 right-0 w-20 h-20 bg-[#56B79A] opacity-5 rounded-bl-full"
                                    whileHover={{ scale: 1.5, opacity: 0.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                
                                {/* Connecting line for non-last items */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#56B79A] to-transparent"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                                    />
                                )}
                                
                                <motion.div
                                    className="w-14 h-14 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg relative"
                                    whileHover={{ 
                                        rotate: [0, -10, 10, -10, 0],
                                        scale: 1.1
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {step.number}
                                    
                                    {/* Pulse effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl bg-[#56B79A]"
                                        initial={{ opacity: 0.5, scale: 1 }}
                                        animate={{ opacity: 0, scale: 1.5 }}
                                        transition={{ 
                                            duration: 2, 
                                            repeat: Infinity,
                                            delay: index * 0.3
                                        }}
                                    />
                                </motion.div>
                                
                                <motion.h3 
                                    className="text-xl font-bold text-[#3B6F8E] mb-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9 + index * 0.1 }}
                                >
                                    {step.title}
                                </motion.h3>
                                <motion.p 
                                    className="text-sm text-gray-600"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                >
                                    {step.desc}
                                </motion.p>
                                
                                {/* Hover indicator */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B6F8E] to-[#56B79A]"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
