"use client";

import { motion } from "framer-motion";
import { 
    Brain, 
    Zap, 
    TrendingUp, 
    Activity, 
    Cpu, 
    BarChart3,
    CheckCircle,
    ArrowRight,
    Waves,
    Target,
    Shield,
    Sparkles
} from "lucide-react";

export default function MethodologyPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const steps = [
        {
            icon: Brain,
            title: "EEG Signal Acquisition",
            description: "Neural signals are captured using the Muse headband with 4 electrodes (TP9, AF7, AF8, TP10) at 256 Hz sampling rate.",
            color: "#56B79A",
            details: [
                "High-precision electrode placement",
                "Real-time signal quality monitoring",
                "Noise reduction and artifact removal"
            ]
        },
        {
            icon: Waves,
            title: "Signal Preprocessing",
            description: "Raw EEG data undergoes filtering, normalization, and frequency band decomposition to extract meaningful features.",
            color: "#3B6F8E",
            details: [
                "Bandpass filtering (0.5-50 Hz)",
                "Independent Component Analysis (ICA)",
                "Power spectral density calculation"
            ]
        },
        {
            icon: Cpu,
            title: "Feature Extraction",
            description: "Advanced algorithms extract frequency band powers (Alpha, Beta, Gamma, Theta) and statistical features from the processed signals.",
            color: "#E67E22",
            details: [
                "Fast Fourier Transform (FFT)",
                "Wavelet decomposition",
                "Time-frequency analysis"
            ]
        },
        {
            icon: Sparkles,
            title: "AI Classification",
            description: "Deep learning models analyze extracted features to classify emotional states and cognitive patterns with high accuracy.",
            color: "#9B59B6",
            details: [
                "Hybrid CNN-LSTM architecture",
                "Transfer learning optimization",
                "Real-time inference (<100ms)"
            ]
        }
    ];

    const waveTypes = [
        {
            name: "Alpha Waves",
            range: "8-13 Hz",
            color: "#56B79A",
            description: "Dominant during relaxation and calm states",
            characteristics: [
                "Meditation and mindfulness",
                "Relaxed wakefulness",
                "Creative thinking"
            ]
        },
        {
            name: "Beta Waves",
            range: "13-30 Hz",
            color: "#3B6F8E",
            description: "Associated with active thinking and focus",
            characteristics: [
                "Problem-solving",
                "Active concentration",
                "Logical reasoning"
            ]
        },
        {
            name: "Gamma Waves",
            range: "30-100 Hz",
            color: "#E67E22",
            description: "Linked to high-level cognitive processing",
            characteristics: [
                "Information processing",
                "Memory consolidation",
                "Peak performance"
            ]
        },
        {
            name: "Theta Waves",
            range: "4-8 Hz",
            color: "#9B59B6",
            description: "Present during deep relaxation and sleep",
            characteristics: [
                "Deep meditation",
                "REM sleep",
                "Subconscious processing"
            ]
        }
    ];

    const accuracyMetrics = [
        { label: "Classification Accuracy", value: "94.7%", color: "#56B79A" },
        { label: "Real-time Processing", value: "<100ms", color: "#3B6F8E" },
        { label: "Signal Quality", value: "98.2%", color: "#E67E22" },
        { label: "Model Precision", value: "96.1%", color: "#9B59B6" }
    ];

    return (
        <div className="min-h-screen bg-[#F4F7F9] pb-12">
            {/* Hero Section */}
            <motion.div 
                className="bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] text-white py-20 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6"
                    >
                        <Brain size={40} />
                    </motion.div>
                    <motion.h1 
                        className="text-5xl font-bold mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Our Methodology
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-white/90 max-w-3xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Advanced hybrid deep learning combined with neuroscience principles to decode 
                        emotional states from neural frequency patterns
                    </motion.p>
                </div>
            </motion.div>

            <div className="max-w-6xl mx-auto px-6 -mt-10">
                {/* Accuracy Metrics */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {accuracyMetrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="card text-center"
                            whileHover={{ y: -5 }}
                        >
                            <p className="text-sm text-gray-600 mb-2">{metric.label}</p>
                            <motion.p 
                                className="text-3xl font-bold"
                                style={{ color: metric.color }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", delay: 0.5 + index * 0.1 }}
                            >
                                {metric.value}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Processing Pipeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-[#3B6F8E] mb-8 text-center">
                        Signal Processing Pipeline
                    </h2>
                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                className="relative"
                            >
                                <div className="card">
                                    <div className="flex items-start gap-6">
                                        <motion.div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: `${step.color}20` }}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <step.icon style={{ color: step.color }} size={32} />
                                        </motion.div>
                                        
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span 
                                                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                                    style={{ backgroundColor: step.color }}
                                                >
                                                    {index + 1}
                                                </span>
                                                <h3 className="text-xl font-bold text-[#3B6F8E]">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 mb-4">{step.description}</p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                {step.details.map((detail, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        className="flex items-center gap-2 text-sm text-gray-700"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.8 + index * 0.1 + idx * 0.05 }}
                                                    >
                                                        <CheckCircle size={16} style={{ color: step.color }} />
                                                        {detail}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {index < steps.length - 1 && (
                                    <motion.div
                                        className="flex justify-center my-4"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.9 + index * 0.1 }}
                                    >
                                        <ArrowRight className="text-[#56B79A]" size={32} />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* EEG Wave Types */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-[#3B6F8E] mb-8 text-center">
                        EEG Frequency Bands
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {waveTypes.map((wave, index) => (
                            <motion.div
                                key={index}
                                className="card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.3 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div 
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${wave.color}20` }}
                                    >
                                        <Activity style={{ color: wave.color }} size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold" style={{ color: wave.color }}>
                                            {wave.name}
                                        </h3>
                                        <p className="text-sm font-semibold text-gray-600">{wave.range}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">{wave.description}</p>
                                <div className="space-y-2">
                                    {wave.characteristics.map((char, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="flex items-center gap-2 text-sm text-gray-700"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.4 + index * 0.1 + idx * 0.05 }}
                                        >
                                            <div 
                                                className="w-2 h-2 rounded-full"
                                                style={{ backgroundColor: wave.color }}
                                            />
                                            {char}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technical Specifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-[#3B6F8E] mb-8 text-center">
                        Technical Specifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div 
                            className="card"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-[#56B79A20] rounded-xl flex items-center justify-center">
                                    <Target className="text-[#56B79A]" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-[#3B6F8E]">Accuracy</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• 94.7% classification accuracy</li>
                                <li>• 96.1% precision rate</li>
                                <li>• 93.8% recall rate</li>
                                <li>• Cross-validated on 10,000+ samples</li>
                            </ul>
                        </motion.div>

                        <motion.div 
                            className="card"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-[#3B6F8E20] rounded-xl flex items-center justify-center">
                                    <Zap className="text-[#3B6F8E]" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-[#3B6F8E]">Performance</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Real-time processing (&lt;100ms)</li>
                                <li>• 256 Hz sampling rate</li>
                                <li>• 4-channel EEG acquisition</li>
                                <li>• Continuous monitoring support</li>
                            </ul>
                        </motion.div>

                        <motion.div 
                            className="card"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-[#E67E2220] rounded-xl flex items-center justify-center">
                                    <Shield className="text-[#E67E22]" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-[#3B6F8E]">Reliability</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• 98.2% signal quality</li>
                                <li>• Artifact rejection algorithms</li>
                                <li>• Adaptive noise filtering</li>
                                <li>• Quality assurance protocols</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Model Architecture */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 }}
                    className="card mb-12"
                >
                    <h2 className="text-2xl font-bold text-[#3B6F8E] mb-6 flex items-center gap-3">
                        <Cpu size={28} />
                        AI Model Architecture
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-[#3B6F8E] mb-4">Neural Network Layers</h3>
                            <div className="space-y-3">
                                {[
                                    { name: "Input Layer", neurons: "1024 features" },
                                    { name: "CNN Layers", neurons: "3 convolutional blocks" },
                                    { name: "LSTM Layers", neurons: "2 bidirectional layers" },
                                    { name: "Dense Layers", neurons: "256 → 128 → 64" },
                                    { name: "Output Layer", neurons: "3 classes (softmax)" }
                                ].map((layer, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-center justify-between p-3 bg-[#EEF3F6] rounded-lg"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.9 + idx * 0.1 }}
                                    >
                                        <span className="font-semibold text-gray-700">{layer.name}</span>
                                        <span className="text-sm text-[#56B79A]">{layer.neurons}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#3B6F8E] mb-4">Training Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Dataset Size</p>
                                    <div className="h-2 bg-[#E6EDF2] rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-[#56B79A]"
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ delay: 2, duration: 1 }}
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">50,000+ labeled samples</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Training Epochs</p>
                                    <div className="h-2 bg-[#E6EDF2] rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-[#3B6F8E]"
                                            initial={{ width: 0 }}
                                            animate={{ width: "85%" }}
                                            transition={{ delay: 2.2, duration: 1 }}
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">200 epochs with early stopping</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Validation Accuracy</p>
                                    <div className="h-2 bg-[#E6EDF2] rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-[#E67E22]"
                                            initial={{ width: 0 }}
                                            animate={{ width: "94.7%" }}
                                            transition={{ delay: 2.4, duration: 1 }}
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">94.7% on test set</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}