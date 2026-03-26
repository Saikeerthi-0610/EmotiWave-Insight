"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
    ArrowLeft, 
    FileText, 
    Calendar, 
    Brain,
    Activity,
    Download,
    Eye,
    User,
    Phone,
    Mail,
    MapPin
} from "lucide-react";
import { generatePatientReport } from "../../utils/pdfGenerator";

export default function PatientDetailsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const patientId = searchParams.get('id');
    
    const [patient, setPatient] = useState<any>(null);
    const [reports, setReports] = useState<any[]>([]);
    const [selectedReport, setSelectedReport] = useState<any>(null);

    useEffect(() => {
        if (!patientId) {
            router.push('/dashboard');
            return;
        }

        // Load patient data from localStorage
        const storedReports = localStorage.getItem("patientReports");
        if (storedReports) {
            const allReports = JSON.parse(storedReports);
            const patientReports = allReports.filter((r: any) => r.patientId === patientId);
            
            if (patientReports.length > 0) {
                setReports(patientReports);
                
                // Create patient object from reports
                const latestReport = patientReports[0];
                setPatient({
                    id: patientId,
                    name: latestReport.patientName,
                    age: 30,
                    gender: "Unknown",
                    phone: "+1 234-567-8900",
                    email: `${patientId.toLowerCase()}@example.com`,
                    address: "123 Medical Center Dr",
                    totalScans: patientReports.length,
                    latestEmotion: latestReport.emotion,
                    lastVisit: latestReport.date
                });
            } else {
                router.push('/dashboard');
            }
        }
    }, [patientId, router]);

    const getEmotionColor = (emotion: string) => {
        switch (emotion) {
            case "Positive": return "#56B79A";
            case "Negative": return "#E74C3C";
            default: return "#95A5A6";
        }
    };

    if (!patient) {
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
                {/* Back Button */}
                <motion.button
                    onClick={() => router.push('/dashboard')}
                    className="flex items-center gap-2 text-[#3B6F8E] hover:text-[#56B79A] mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: -5 }}
                >
                    <ArrowLeft size={20} />
                    Back to Dashboard
                </motion.button>

                {/* Patient Header */}
                <motion.div
                    className="card p-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
                                {patient.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-[#3B6F8E] mb-2">{patient.name}</h1>
                                <div className="flex items-center gap-4 text-gray-600">
                                    <span>Patient ID: {patient.id}</span>
                                    <span>•</span>
                                    <span>{patient.age} years</span>
                                    <span>•</span>
                                    <span>{patient.gender}</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <span 
                                className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                                style={{ 
                                    backgroundColor: `${getEmotionColor(patient.latestEmotion)}20`,
                                    color: getEmotionColor(patient.latestEmotion)
                                }}
                            >
                                {patient.latestEmotion}
                            </span>
                            <p className="text-sm text-gray-600 mt-2">Latest State</p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-[#D6E0E7]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#3B6F8E20] rounded-lg flex items-center justify-center">
                                <Phone className="text-[#3B6F8E]" size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-600">Phone</p>
                                <p className="font-semibold text-[#3B6F8E]">{patient.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#56B79A20] rounded-lg flex items-center justify-center">
                                <Mail className="text-[#56B79A]" size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-600">Email</p>
                                <p className="font-semibold text-[#3B6F8E]">{patient.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#3B6F8E20] rounded-lg flex items-center justify-center">
                                <MapPin className="text-[#3B6F8E]" size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-600">Address</p>
                                <p className="font-semibold text-[#3B6F8E]">{patient.address}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <motion.div
                        className="card p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Total Scans</p>
                                <p className="text-3xl font-bold text-[#3B6F8E]">{patient.totalScans}</p>
                            </div>
                            <div className="w-14 h-14 bg-[#3B6F8E20] rounded-2xl flex items-center justify-center">
                                <Activity className="text-[#3B6F8E]" size={28} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="card p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Last Visit</p>
                                <p className="text-xl font-bold text-[#56B79A]">{patient.lastVisit}</p>
                            </div>
                            <div className="w-14 h-14 bg-[#56B79A20] rounded-2xl flex items-center justify-center">
                                <Calendar className="text-[#56B79A]" size={28} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="card p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Reports</p>
                                <p className="text-3xl font-bold text-[#3B6F8E]">{reports.length}</p>
                            </div>
                            <div className="w-14 h-14 bg-[#3B6F8E20] rounded-2xl flex items-center justify-center">
                                <FileText className="text-[#3B6F8E]" size={28} />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Reports Section */}
                <motion.div
                    className="card p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-2xl font-bold text-[#3B6F8E] mb-6">Analysis Reports</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reports.map((report, index) => (
                            <motion.div
                                key={report.id}
                                className="p-6 bg-[#F4F7F9] rounded-xl hover:bg-white border-2 border-transparent hover:border-[#56B79A] transition-all cursor-pointer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                                onClick={() => setSelectedReport(report)}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-gray-600" />
                                        <span className="text-sm text-gray-600">{report.date}</span>
                                    </div>
                                    <span 
                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                        style={{ 
                                            backgroundColor: `${getEmotionColor(report.emotion)}20`,
                                            color: getEmotionColor(report.emotion)
                                        }}
                                    >
                                        {report.emotion}
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <p className="text-sm text-gray-600 mb-1">Dominant Wave</p>
                                    <p className="text-lg font-bold text-[#3B6F8E]">{report.dominantWave}</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-600">Accuracy: {report.accuracy}</span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            generatePatientReport({
                                                ...report,
                                                patientName: patient.name,
                                                patientId: patient.id,
                                                summary: report.notes,
                                                recommendations: [
                                                    "Continue monitoring brain wave patterns",
                                                    "Maintain regular sleep schedule",
                                                    "Practice stress management techniques"
                                                ]
                                            });
                                        }}
                                        className="text-[#56B79A] hover:text-[#3B6F8E] flex items-center gap-1"
                                    >
                                        <Download size={14} />
                                        <span className="text-xs">Download</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Report Detail Modal */}
            {selectedReport && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedReport(null)}
                >
                    <motion.div
                        className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-[#3B6F8E]">Report Details</h3>
                            <button
                                onClick={() => setSelectedReport(null)}
                                className="text-gray-400 hover:text-gray-600 text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                <p className="text-sm text-gray-600 mb-2">Report ID</p>
                                <p className="font-semibold text-[#3B6F8E]">{selectedReport.id}</p>
                            </div>

                            <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                <p className="text-sm text-gray-600 mb-2">Analysis Date</p>
                                <p className="font-semibold text-[#3B6F8E]">{selectedReport.date}</p>
                            </div>

                            <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                <p className="text-sm text-gray-600 mb-2">Emotional State</p>
                                <span 
                                    className="inline-block px-4 py-2 rounded-full font-semibold"
                                    style={{ 
                                        backgroundColor: `${getEmotionColor(selectedReport.emotion)}20`,
                                        color: getEmotionColor(selectedReport.emotion)
                                    }}
                                >
                                    {selectedReport.emotion}
                                </span>
                            </div>

                            <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                <p className="text-sm text-gray-600 mb-3">Brain Wave Frequencies</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <p className="text-xs text-gray-600">Alpha</p>
                                        <p className="font-bold text-[#3B6F8E]">{selectedReport.frequencies.alpha} Hz</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-600">Beta</p>
                                        <p className="font-bold text-[#56B79A]">{selectedReport.frequencies.beta} Hz</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-600">Gamma</p>
                                        <p className="font-bold text-[#E67E22]">{selectedReport.frequencies.gamma} Hz</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-600">Theta</p>
                                        <p className="font-bold text-[#9B59B6]">{selectedReport.frequencies.theta} Hz</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                <p className="text-sm text-gray-600 mb-2">Clinical Notes</p>
                                <p className="text-gray-700">{selectedReport.notes}</p>
                            </div>

                            <motion.button
                                className="btn-primary w-full py-3"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    generatePatientReport({
                                        ...selectedReport,
                                        patientName: patient.name,
                                        patientId: patient.id,
                                        summary: selectedReport.notes,
                                        recommendations: [
                                            "Continue monitoring brain wave patterns",
                                            "Maintain regular sleep schedule",
                                            "Practice stress management techniques"
                                        ]
                                    });
                                }}
                            >
                                <Download size={18} className="inline mr-2" />
                                Download Full Report
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
