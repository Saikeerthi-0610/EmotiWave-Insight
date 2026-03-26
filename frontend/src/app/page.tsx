"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Zap, Sparkles, ArrowRight, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
    const features = [
        {
            icon: Zap,
            title: "Real-time Classification",
            description: "Identify states like deep focus, relaxation, or high stress instantly",
            gradient: "from-[#3B6F8E] to-[#56B79A]"
        },
        {
            icon: Brain,
            title: "Generative Insights",
            description: "Receive personalized, AI-driven textual summaries of your sessions",
            gradient: "from-[#56B79A] to-[#3B6F8E]"
        },
        {
            icon: Activity,
            title: "Session Comparison",
            description: "Track your cognitive trends across multiple sessions and dates",
            gradient: "from-[#3B6F8E] to-[#56B79A]"
        }
    ];

    const benefits = [
        { icon: Shield, text: "HIPAA Compliant" },
        { icon: TrendingUp, text: "Real-time Processing" },
        { icon: Brain, text: "AI-Powered Analysis" }
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

            <div className="relative z-10">
                {/* Hero Section */}
                <motion.div 
                    className="text-center py-24 px-6"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#56B79A20] to-[#3B6F8E20] rounded-full mb-6 border border-[#56B79A30]"
                    >
                        <Sparkles className="text-[#56B79A]" size={18} />
                        <span className="text-[#3B6F8E] font-semibold text-sm">AI-Powered Neural Analysis</span>
                    </motion.div>

                    <motion.h1 
                        className="text-6xl font-bold text-[#3B6F8E] mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Unlock the Waves of{" "}
                        <span className="bg-gradient-to-r from-[#3B6F8E] to-[#56B79A] bg-clip-text text-transparent">
                            Your Mind
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        EmotiWave Insight uses advanced hybrid deep learning to decode emotional
                        states directly from your neural frequency patterns.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex items-center justify-center gap-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link href="/access">
                            <motion.button
                                className="btn-primary px-8 py-4 flex items-center gap-3 text-lg font-semibold shadow-lg"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(86, 183, 154, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Analysis
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowRight size={20} />
                                </motion.div>
                            </motion.button>
                        </Link>
                        <Link href="/methodology">
                            <motion.button
                                className="btn-secondary px-8 py-4 text-lg font-semibold"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="flex items-center justify-center gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#3B6F8E]">94.7%</div>
                            <div className="text-sm text-gray-600">Accuracy</div>
                        </div>
                        <div className="w-px h-12 bg-[#D6E0E7]"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#56B79A]">&lt;100ms</div>
                            <div className="text-sm text-gray-600">Processing</div>
                        </div>
                        <div className="w-px h-12 bg-[#D6E0E7]"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#3B6F8E]">10K+</div>
                            <div className="text-sm text-gray-600">Sessions</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Feature Cards */}
                <motion.div 
                    className="max-w-6xl mx-auto px-6 pb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div 
                                key={index}
                                className="card text-center relative overflow-hidden group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(59, 111, 142, 0.15)" }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                                
                                <motion.div 
                                    className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md relative z-10`}
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <feature.icon className="text-white" size={36} />
                                </motion.div>
                                
                                <h3 className="text-xl font-bold text-[#3B6F8E] mb-3 relative z-10">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                                    {feature.description}
                                </p>

                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#56B79A] opacity-5 rounded-bl-full"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Benefits Section */}
                <motion.div
                    className="max-w-4xl mx-auto px-6 pb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                >
                    <div className="card text-center py-12">
                        <h2 className="text-3xl font-bold text-[#3B6F8E] mb-8">
                            Why Choose EmotiWave Insight?
                        </h2>
                        <div className="flex items-center justify-center gap-8 flex-wrap">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-3 px-6 py-3 bg-[#F4F7F9] rounded-xl"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-lg flex items-center justify-center">
                                        <benefit.icon className="text-white" size={20} />
                                    </div>
                                    <span className="font-semibold text-[#3B6F8E]">{benefit.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
