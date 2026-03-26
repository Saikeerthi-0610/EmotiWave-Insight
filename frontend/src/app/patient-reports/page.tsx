"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, Brain, Activity, Eye, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { generatePatientReport } from "../../utils/pdfGenerator";

// Mock patient reports data
const mockPatientReports = [
    {
        id: "R001",
        date: "2024-03-20",
        emotion: "Positive",
        dominantWave: "Alpha",
        accuracy: "98.59%",
        summary: "Patient shows positive emotional state with high alpha wave activity indicating relaxation and calmness.",
        recommendations: [
            "Continue current wellness routine",
            "Maintain regular sleep schedule",
            "Practice mindfulness exercises"
        ]
    },
    {
        id: "R002",
        date: "2024-03-15",
        emotion: "Neutral",
        dominantWave: "Beta",
        accuracy: "98.59%",
        summary: "Balanced brain wave activity across all frequency bands. Neutral emotional baseline detected.",
        recommendations: [
            "Monitor stress levels",
            "Engage in regular physical activity",
            "Maintain work-life balance"
        ]
    },
    {
        id: "R003",
        date: "2024-03-10",
        emotion: "Positive",
        dominantWave: "Alpha",
        accuracy: "98.59%",
        summary: "Excellent emotional state with optimal alpha-theta balance. Patient demonstrates good emotional regulation.",
        recommendations: [
            "Continue meditation practices",
            "Maintain current lifestyle",
            "Schedule follow-up in 2 weeks"
        ]
    }
];

export default function PatientReportsPage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [selectedReport, setSelectedReport] = useState<any>(null);

    useEffect(() => {
        // Check authentication
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/access");
            return;
        }
        
        const userData = JSON.parse(storedUser);
        if (userData.role !== "patient") {
            router.push("/dashboard");
            return;
        }
        
        setUser(userData);
    }, [router]);

    const handleDownloadReport = (report: any) => {
        // Add patient information to the report
        const reportWithPatientInfo = {
            ...report,
            patientName: user?.name || "User",
            patientId: user?.id || "355"
        };
        
        // Generate the patient-friendly PDF
        generatePatientReport(reportWithPatientInfo);
    };

    const getEmotionColor = (emotion: string) => {
        switch (emotion) {
            case "Positive": return "#56B79A";
            case "Negative": return "#E74C3C";
            default: return "#95A5A6";
        }
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-[#F4F7F9] flex items-center justify-center">
                <div className="spinner"></div>
            </div>
        );
    }

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
                    className="mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl font-bold text-[#3B6F8E] mb-2">My Reports</h1>
                    <p className="text-gray-600">View your EEG analysis reports and recommendations</p>
                </motion.div>

                {/* Patient Info Card */}
                <motion.div
                    className="card p-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                            {user.name.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#3B6F8E]">{user.name}</h2>
                            <p className="text-gray-600">Patient ID: {user.id}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Reports Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Reports List */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#3B6F8E] mb-4">Analysis Reports</h2>
                        {mockPatientReports.map((report, index) => (
                            <motion.div
                                key={report.id}
                                className={`card p-6 cursor-pointer transition-all ${
                                    selectedReport?.id === report.id
                                        ? "border-2 border-[#56B79A] bg-[#56B79A10]"
                                        : "hover:border-2 hover:border-[#3B6F8E]"
                                }`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                onClick={() => setSelectedReport(report)}
                                whileHover={{ x: 5 }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-[#3B6F8E20] rounded-xl flex items-center justify-center">
                                            <FileText className="text-[#3B6F8E]" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#3B6F8E]">Report {report.id}</h3>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Calendar size={14} />
                                                {report.date}
                                            </div>
                                        </div>
                                    </div>
                                    <span 
                                        className="px-3 py-1 rounded-full text-sm font-semibold"
                                        style={{ 
                                            backgroundColor: `${getEmotionColor(report.emotion)}20`,
                                            color: getEmotionColor(report.emotion)
                                        }}
                                    >
                                        {report.emotion}
                                    </span>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-3 bg-[#F4F7F9] rounded-lg">
                                        <p className="text-xs text-gray-600 mb-1">Dominant Wave</p>
                                        <p className="font-semibold text-[#3B6F8E]">{report.dominantWave}</p>
                                    </div>
                                    <div className="p-3 bg-[#F4F7F9] rounded-lg">
                                        <p className="text-xs text-gray-600 mb-1">Accuracy</p>
                                        <p className="font-semibold text-[#56B79A]">{report.accuracy}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Report Details */}
                    <motion.div
                        className="card p-6 lg:sticky lg:top-8 h-fit"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {selectedReport ? (
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-[#3B6F8E]">Report Details</h2>
                                    <motion.button
                                        onClick={() => handleDownloadReport(selectedReport)}
                                        className="btn-primary px-4 py-2 flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Download size={16} />
                                        Download
                                    </motion.button>
                                </div>

                                {/* Report Info */}
                                <div className="space-y-6">
                                    <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Brain className="text-[#3B6F8E]" size={20} />
                                            <h3 className="font-bold text-[#3B6F8E]">Analysis Summary</h3>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{selectedReport.summary}</p>
                                    </div>

                                    <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Activity className="text-[#56B79A]" size={20} />
                                            <h3 className="font-bold text-[#3B6F8E]">Recommendations</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {selectedReport.recommendations.map((rec: string, index: number) => (
                                                <li key={index} className="flex items-start gap-2 text-gray-700">
                                                    <span className="text-[#56B79A] font-bold mt-1">•</span>
                                                    {rec}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="p-4 bg-gradient-to-r from-[#3B6F8E10] to-[#56B79A10] rounded-xl border border-[#D6E0E7]">
                                        <p className="text-sm text-gray-700">
                                            <span className="font-semibold text-[#3B6F8E]">Note:</span> This report was generated using our hybrid BiGRU + BiLSTM deep learning model with {selectedReport.accuracy} accuracy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-[#3B6F8E20] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Eye className="text-[#3B6F8E]" size={40} />
                                </div>
                                <p className="text-gray-600">Select a report to view details</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
