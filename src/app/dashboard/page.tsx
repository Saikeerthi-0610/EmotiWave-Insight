"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Users, 
    Search, 
    Filter, 
    FileText, 
    Calendar, 
    Brain,
    Activity,
    TrendingUp,
    Download,
    Eye,
    Clock,
    Smile,
    Meh,
    Frown,
    ChevronRight,
    BarChart3
} from "lucide-react";
import { generatePatientReport } from "../../utils/pdfGenerator";
import { useRouter } from "next/navigation";

// Mock patient data
const mockPatients = [
    {
        id: "P001",
        name: "John Doe",
        age: 34,
        gender: "Male",
        phone: "+1 234-567-8900",
        lastVisit: "2024-03-20",
        totalScans: 5,
        latestEmotion: "Positive",
        status: "Active"
    },
    {
        id: "P002",
        name: "Sarah Smith",
        age: 28,
        gender: "Female",
        phone: "+1 234-567-8901",
        lastVisit: "2024-03-19",
        totalScans: 3,
        latestEmotion: "Neutral",
        status: "Active"
    },
    {
        id: "P003",
        name: "Michael Johnson",
        age: 45,
        gender: "Male",
        phone: "+1 234-567-8902",
        lastVisit: "2024-03-18",
        totalScans: 8,
        latestEmotion: "Negative",
        status: "Under Treatment"
    },
    {
        id: "P004",
        name: "Emily Davis",
        age: 31,
        gender: "Female",
        phone: "+1 234-567-8903",
        lastVisit: "2024-03-17",
        totalScans: 2,
        latestEmotion: "Positive",
        status: "Active"
    },
    {
        id: "P005",
        name: "Robert Wilson",
        age: 52,
        gender: "Male",
        phone: "+1 234-567-8904",
        lastVisit: "2024-03-15",
        totalScans: 12,
        latestEmotion: "Neutral",
        status: "Monitoring"
    }
];

const mockReports = [
    {
        id: "R001",
        patientId: "P001",
        patientName: "John Doe",
        date: "2024-03-20",
        emotion: "Positive",
        dominantWave: "Alpha",
        accuracy: "98.59%",
        dataPoints: 150,
        frequencies: { alpha: 45, beta: 25, gamma: 15, theta: 35 },
        notes: "Patient shows strong positive emotional state with high alpha wave activity. Recommended for continued monitoring.",
        duration: "5 minutes"
    },
    {
        id: "R002",
        patientId: "P001",
        patientName: "John Doe",
        date: "2024-03-15",
        emotion: "Neutral",
        dominantWave: "Beta",
        accuracy: "98.59%",
        dataPoints: 142,
        frequencies: { alpha: 30, beta: 40, gamma: 18, theta: 28 },
        notes: "Balanced emotional state observed. Beta waves indicate active cognitive processing.",
        duration: "4 minutes"
    },
    {
        id: "R003",
        patientId: "P001",
        patientName: "John Doe",
        date: "2024-03-10",
        emotion: "Positive",
        dominantWave: "Alpha",
        accuracy: "98.59%",
        dataPoints: 145,
        frequencies: { alpha: 48, beta: 22, gamma: 12, theta: 38 },
        notes: "Excellent relaxation response. High alpha and theta waves indicate deep calm state.",
        duration: "6 minutes"
    },
    {
        id: "R004",
        patientId: "P001",
        patientName: "John Doe",
        date: "2024-03-05",
        emotion: "Neutral",
        dominantWave: "Beta",
        accuracy: "98.59%",
        dataPoints: 138,
        frequencies: { alpha: 32, beta: 38, gamma: 16, theta: 30 },
        notes: "Normal cognitive activity. Patient in focused state during recording.",
        duration: "5 minutes"
    },
    {
        id: "R005",
        patientId: "P001",
        patientName: "John Doe",
        date: "2024-02-28",
        emotion: "Positive",
        dominantWave: "Theta",
        accuracy: "98.59%",
        dataPoints: 152,
        frequencies: { alpha: 42, beta: 20, gamma: 10, theta: 45 },
        notes: "Deep meditative state achieved. Excellent theta wave production.",
        duration: "7 minutes"
    },
    {
        id: "R006",
        patientId: "P002",
        patientName: "Sarah Smith",
        date: "2024-03-19",
        emotion: "Neutral",
        dominantWave: "Alpha",
        accuracy: "98.59%",
        dataPoints: 138,
        frequencies: { alpha: 35, beta: 32, gamma: 15, theta: 30 },
        notes: "Stable emotional baseline. Good balance across all frequency bands.",
        duration: "5 minutes"
    },
    {
        id: "R007",
        patientId: "P002",
        patientName: "Sarah Smith",
        date: "2024-03-12",
        emotion: "Positive",
        dominantWave: "Alpha",
        accuracy: "98.59%",
        dataPoints: 144,
        frequencies: { alpha: 46, beta: 24, gamma: 12, theta: 36 },
        notes: "Positive emotional response with strong relaxation indicators.",
        duration: "5 minutes"
    },
    {
        id: "R008",
        patientId: "P002",
        patientName: "Sarah Smith",
        date: "2024-03-05",
        emotion: "Neutral",
        dominantWave: "Beta",
        accuracy: "98.59%",
        dataPoints: 140,
        frequencies: { alpha: 30, beta: 38, gamma: 18, theta: 28 },
        notes: "Active mental state. Patient engaged in cognitive tasks during session.",
        duration: "4 minutes"
    },
    {
        id: "R009",
        patientId: "P003",
        patientName: "Michael Johnson",
        date: "2024-03-18",
        emotion: "Negative",
        dominantWave: "Beta",
        accuracy: "98.59%",
        dataPoints: 135,
        frequencies: { alpha: 20, beta: 50, gamma: 25, theta: 18 },
        notes: "Elevated stress indicators. High beta and gamma activity suggests anxiety. Recommend follow-up.",
        duration: "5 minutes"
    }
];

export default function DoctorDashboard() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPatient, setSelectedPatient] = useState<any>(null);
    const [activeTab, setActiveTab] = useState("patients");
    const [filterStatus, setFilterStatus] = useState("All");
    const [selectedReport, setSelectedReport] = useState<any>(null);
    const [allReports, setAllReports] = useState<any[]>([]);
    const [patients, setPatients] = useState<any[]>(mockPatients);

    // Load reports from localStorage
    useEffect(() => {
        const storedReports = localStorage.getItem("patientReports");
        if (storedReports) {
            const reports = JSON.parse(storedReports);
            setAllReports(reports);
            
            // Update patients list with actual data
            const uniquePatients = new Map();
            reports.forEach((report: any) => {
                if (!uniquePatients.has(report.patientId)) {
                    uniquePatients.set(report.patientId, {
                        id: report.patientId,
                        name: report.patientName,
                        age: 30, // Default age
                        gender: "Unknown",
                        phone: "+1 234-567-8900",
                        lastVisit: report.date,
                        totalScans: 1,
                        latestEmotion: report.emotion,
                        status: "Active"
                    });
                } else {
                    const patient = uniquePatients.get(report.patientId);
                    patient.totalScans += 1;
                    patient.latestEmotion = report.emotion;
                    patient.lastVisit = report.date;
                }
            });
            
            // Merge with mock patients
            const updatedPatients = [...mockPatients];
            uniquePatients.forEach((patient) => {
                const existingIndex = updatedPatients.findIndex(p => p.id === patient.id);
                if (existingIndex >= 0) {
                    updatedPatients[existingIndex] = { ...updatedPatients[existingIndex], ...patient };
                } else {
                    updatedPatients.push(patient);
                }
            });
            
            setPatients(updatedPatients);
        }
    }, []);

    const getEmotionIcon = (emotion: string) => {
        switch (emotion) {
            case "Positive": return { icon: Smile, color: "#56B79A" };
            case "Negative": return { icon: Frown, color: "#E74C3C" };
            default: return { icon: Meh, color: "#95A5A6" };
        }
    };

    const filteredPatients = patients.filter(patient => {
        const matchesSearch = patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            patient.id.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filterStatus === "All" || patient.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const patientReports = selectedPatient 
        ? allReports.filter(r => r.patientId === selectedPatient.id)
        : [];

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
                    <h1 className="text-4xl font-bold text-[#3B6F8E] mb-2">Doctor Dashboard</h1>
                    <p className="text-gray-600">Manage patients and view EEG analysis reports</p>
                </motion.div>

                {/* Stats Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <motion.div 
                        className="card p-6 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Total Patients</p>
                                <p className="text-3xl font-bold text-[#3B6F8E]">{patients.length}</p>
                            </div>
                            <div className="w-14 h-14 bg-gradient-to-br from-[#56B79A] to-[#3B6F8E] rounded-2xl flex items-center justify-center">
                                <Users className="text-white" size={28} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="card p-6"
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Total Scans</p>
                                <p className="text-3xl font-bold text-[#3B6F8E]">
                                    {patients.reduce((sum, p) => sum + p.totalScans, 0)}
                                </p>
                            </div>
                            <div className="w-14 h-14 bg-[#3B6F8E20] rounded-2xl flex items-center justify-center">
                                <Activity className="text-[#3B6F8E]" size={28} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="card p-6"
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Active Cases</p>
                                <p className="text-3xl font-bold text-[#56B79A]">
                                    {patients.filter(p => p.status === "Active").length}
                                </p>
                            </div>
                            <div className="w-14 h-14 bg-[#56B79A20] rounded-2xl flex items-center justify-center">
                                <TrendingUp className="text-[#56B79A]" size={28} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="card p-6 bg-gradient-to-br from-[#56B79A] to-[#3B6F8E] text-white"
                        whileHover={{ y: -5, scale: 1.02 }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm opacity-90 mb-1">Model Accuracy</p>
                                <p className="text-3xl font-bold">98.59%</p>
                            </div>
                            <Brain size={32} />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Patients List */}
                    <motion.div 
                        className="lg:col-span-2 card"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Search and Filter */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex-1 relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search patients..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="input pl-12 w-full"
                                />
                            </div>
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="input"
                            >
                                <option>All</option>
                                <option>Active</option>
                                <option>Under Treatment</option>
                                <option>Monitoring</option>
                            </select>
                        </div>

                        {/* Patients Table */}
                        <div className="space-y-3">
                            {filteredPatients.length > 0 ? (
                                filteredPatients.map((patient, index) => {
                                const emotionInfo = getEmotionIcon(patient.latestEmotion);
                                const EmotionIcon = emotionInfo.icon;
                                
                                return (
                                    <motion.div
                                        key={patient.id}
                                        className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                                            selectedPatient?.id === patient.id
                                                ? "border-[#56B79A] bg-[#56B79A10]"
                                                : "border-[#D6E0E7] hover:border-[#3B6F8E] hover:bg-[#F4F7F9]"
                                        }`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.05 }}
                                        onClick={() => router.push(`/patient-details?id=${patient.id}`)}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-xl flex items-center justify-center text-white font-bold">
                                                    {patient.name.split(' ').map((n: string) => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-[#3B6F8E]">{patient.name}</h3>
                                                    <p className="text-sm text-gray-600">
                                                        {patient.id} • {patient.age}y • {patient.gender}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-right">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <EmotionIcon size={16} style={{ color: emotionInfo.color }} />
                                                        <span className="text-sm font-semibold" style={{ color: emotionInfo.color }}>
                                                            {patient.latestEmotion}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-gray-600">{patient.totalScans} scans</p>
                                                </div>
                                                <ChevronRight className="text-gray-400" size={20} />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-600">No patients found. Upload EEG data to add patients.</p>
                            </div>
                        )}
                        </div>
                    </motion.div>

                    {/* Patient Details */}
                    <motion.div 
                        className="card"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <AnimatePresence mode="wait">
                            {selectedPatient ? (
                                <motion.div
                                    key={selectedPatient.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-xl flex items-center justify-center">
                                            <FileText className="text-white" size={24} />
                                        </div>
                                        <h2 className="text-xl font-bold text-[#3B6F8E]">Patient Details</h2>
                                    </div>

                                    {/* Patient Info */}
                                    <div className="space-y-4 mb-6">
                                        <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                            <p className="text-xs text-gray-600 mb-1">Full Name</p>
                                            <p className="font-semibold text-[#3B6F8E]">{selectedPatient.name}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                                <p className="text-xs text-gray-600 mb-1">Patient ID</p>
                                                <p className="font-semibold text-[#3B6F8E]">{selectedPatient.id}</p>
                                            </div>
                                            <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                                <p className="text-xs text-gray-600 mb-1">Age</p>
                                                <p className="font-semibold text-[#3B6F8E]">{selectedPatient.age} years</p>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                            <p className="text-xs text-gray-600 mb-1">Contact</p>
                                            <p className="font-semibold text-[#3B6F8E]">{selectedPatient.phone}</p>
                                        </div>
                                        <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                            <p className="text-xs text-gray-600 mb-1">Status</p>
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                                selectedPatient.status === "Active" ? "bg-[#56B79A20] text-[#56B79A]" :
                                                selectedPatient.status === "Under Treatment" ? "bg-[#E67E2220] text-[#E67E22]" :
                                                "bg-[#3B6F8E20] text-[#3B6F8E]"
                                            }`}>
                                                {selectedPatient.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Recent Reports */}
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-sm font-bold text-[#3B6F8E]">Recent Reports</h3>
                                            <span className="text-xs text-gray-600">
                                                {patientReports.length} total
                                            </span>
                                        </div>
                                        <div className="space-y-2">
                                            {patientReports.length > 0 ? (
                                                patientReports.slice(0, 3).map((report, index) => {
                                                    const emotionInfo = getEmotionIcon(report.emotion);
                                                    const EmotionIcon = emotionInfo.icon;
                                                    
                                                    return (
                                                        <motion.div
                                                            key={report.id}
                                                            className="p-3 bg-[#F4F7F9] rounded-xl hover:bg-white border border-transparent hover:border-[#D6E0E7] transition-all cursor-pointer"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            whileHover={{ x: 3 }}
                                                        >
                                                            <div className="flex items-center justify-between mb-2">
                                                                <div className="flex items-center gap-2">
                                                                    <Calendar size={14} className="text-gray-600" />
                                                                    <span className="text-xs text-gray-600">{report.date}</span>
                                                                </div>
                                                                <EmotionIcon size={16} style={{ color: emotionInfo.color }} />
                                                            </div>
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-sm font-semibold text-[#3B6F8E]">
                                                                    {report.emotion}
                                                                </span>
                                                                <button 
                                                                    onClick={() => setSelectedReport(report)}
                                                                    className="text-xs text-[#56B79A] hover:underline flex items-center gap-1"
                                                                >
                                                                    <Eye size={12} />
                                                                    View
                                                                </button>
                                                            </div>
                                                        </motion.div>
                                                    );
                                                })
                                            ) : (
                                                <p className="text-sm text-gray-500 text-center py-4">No reports available</p>
                                            )}
                                        </div>
                                        
                                        {patientReports.length > 3 && (
                                            <motion.button
                                                className="w-full mt-3 py-2 text-sm text-[#56B79A] hover:text-[#3B6F8E] font-semibold flex items-center justify-center gap-2 border border-[#D6E0E7] rounded-xl hover:bg-[#F4F7F9] transition-colors"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => {
                                                    if (patientReports.length > 0) {
                                                        setSelectedReport(patientReports[0]);
                                                    }
                                                }}
                                            >
                                                <BarChart3 size={16} />
                                                View All {patientReports.length} Reports
                                            </motion.button>
                                        )}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="text-center py-12"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="w-20 h-20 bg-[#3B6F8E20] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Users className="text-[#3B6F8E]" size={40} />
                                    </div>
                                    <p className="text-gray-600">Select a patient to view details</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            {/* Report Viewer Modal */}
            {selectedReport && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedReport(null)}
                >
                    <motion.div
                        className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[85vh] overflow-y-auto"
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D6E0E7]">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-xl flex items-center justify-center">
                                    <FileText className="text-white" size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#3B6F8E]">EEG Analysis Report</h2>
                                    <p className="text-sm text-gray-600">Report ID: {selectedReport.id}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                {/* Navigation for multiple reports */}
                                {patientReports.length > 1 && (
                                    <div className="flex items-center gap-2">
                                        <motion.button
                                            className="w-8 h-8 rounded-lg bg-[#F4F7F9] hover:bg-[#D6E0E7] flex items-center justify-center text-[#3B6F8E]"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => {
                                                const currentIndex = patientReports.findIndex(r => r.id === selectedReport.id);
                                                if (currentIndex > 0) {
                                                    setSelectedReport(patientReports[currentIndex - 1]);
                                                }
                                            }}
                                            disabled={patientReports.findIndex(r => r.id === selectedReport.id) === 0}
                                        >
                                            ‹
                                        </motion.button>
                                        <span className="text-sm text-gray-600">
                                            {patientReports.findIndex(r => r.id === selectedReport.id) + 1} / {patientReports.length}
                                        </span>
                                        <motion.button
                                            className="w-8 h-8 rounded-lg bg-[#F4F7F9] hover:bg-[#D6E0E7] flex items-center justify-center text-[#3B6F8E]"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => {
                                                const currentIndex = patientReports.findIndex(r => r.id === selectedReport.id);
                                                if (currentIndex < patientReports.length - 1) {
                                                    setSelectedReport(patientReports[currentIndex + 1]);
                                                }
                                            }}
                                            disabled={patientReports.findIndex(r => r.id === selectedReport.id) === patientReports.length - 1}
                                        >
                                            ›
                                        </motion.button>
                                    </div>
                                )}
                                <button
                                    onClick={() => setSelectedReport(null)}
                                    className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        {/* Patient Info Banner */}
                        <div className="bg-gradient-to-r from-[#3B6F8E] to-[#56B79A] rounded-xl p-6 mb-6 text-white">
                            <div className="grid grid-cols-3 gap-6">
                                <div>
                                    <p className="text-sm opacity-90 mb-1">Patient Name</p>
                                    <p className="text-lg font-bold">{selectedReport.patientName}</p>
                                </div>
                                <div>
                                    <p className="text-sm opacity-90 mb-1">Patient ID</p>
                                    <p className="text-lg font-bold">{selectedReport.patientId}</p>
                                </div>
                                <div>
                                    <p className="text-sm opacity-90 mb-1">Analysis Date</p>
                                    <p className="text-lg font-bold">{selectedReport.date}</p>
                                </div>
                            </div>
                        </div>

                        {/* Emotion Classification */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-[#3B6F8E] mb-4">Emotion Classification</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <motion.div 
                                    className={`p-6 rounded-xl border-2 ${
                                        selectedReport.emotion === "Positive" 
                                            ? "border-[#56B79A] bg-[#56B79A10]" 
                                            : "border-[#D6E0E7] bg-[#F4F7F9]"
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <Smile className="text-[#56B79A]" size={24} />
                                        <span className="font-bold text-[#56B79A]">Positive</span>
                                    </div>
                                    {selectedReport.emotion === "Positive" && (
                                        <p className="text-xs text-gray-600">Current State</p>
                                    )}
                                </motion.div>

                                <motion.div 
                                    className={`p-6 rounded-xl border-2 ${
                                        selectedReport.emotion === "Neutral" 
                                            ? "border-[#95A5A6] bg-[#95A5A610]" 
                                            : "border-[#D6E0E7] bg-[#F4F7F9]"
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <Meh className="text-[#95A5A6]" size={24} />
                                        <span className="font-bold text-[#95A5A6]">Neutral</span>
                                    </div>
                                    {selectedReport.emotion === "Neutral" && (
                                        <p className="text-xs text-gray-600">Current State</p>
                                    )}
                                </motion.div>

                                <motion.div 
                                    className={`p-6 rounded-xl border-2 ${
                                        selectedReport.emotion === "Negative" 
                                            ? "border-[#E74C3C] bg-[#E74C3C10]" 
                                            : "border-[#D6E0E7] bg-[#F4F7F9]"
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <Frown className="text-[#E74C3C]" size={24} />
                                        <span className="font-bold text-[#E74C3C]">Negative</span>
                                    </div>
                                    {selectedReport.emotion === "Negative" && (
                                        <p className="text-xs text-gray-600">Current State</p>
                                    )}
                                </motion.div>
                            </div>
                        </div>

                        {/* Analysis Details */}
                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-[#3B6F8E] mb-4">Analysis Metrics</h3>
                                <div className="space-y-3">
                                    <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Model Accuracy</span>
                                            <span className="font-bold text-[#56B79A]">{selectedReport.accuracy}</span>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Dominant Wave</span>
                                            <span className="font-bold text-[#3B6F8E]">{selectedReport.dominantWave}</span>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Data Points</span>
                                            <span className="font-bold text-[#3B6F8E]">{selectedReport.dataPoints}</span>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">Duration</span>
                                            <span className="font-bold text-[#3B6F8E]">{selectedReport.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-[#3B6F8E] mb-4">Frequency Bands</h3>
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-semibold text-[#3B6F8E]">Alpha (8-13 Hz)</span>
                                            <span className="text-sm font-bold text-[#3B6F8E]">{selectedReport.frequencies.alpha}%</span>
                                        </div>
                                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-[#3B6F8E]"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${selectedReport.frequencies.alpha}%` }}
                                                transition={{ duration: 0.8 }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-semibold text-[#56B79A]">Beta (13-30 Hz)</span>
                                            <span className="text-sm font-bold text-[#56B79A]">{selectedReport.frequencies.beta}%</span>
                                        </div>
                                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-[#56B79A]"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${selectedReport.frequencies.beta}%` }}
                                                transition={{ duration: 0.8, delay: 0.1 }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-semibold text-[#E67E22]">Gamma (30-100 Hz)</span>
                                            <span className="text-sm font-bold text-[#E67E22]">{selectedReport.frequencies.gamma}%</span>
                                        </div>
                                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-[#E67E22]"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${selectedReport.frequencies.gamma}%` }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-semibold text-[#9B59B6]">Theta (4-8 Hz)</span>
                                            <span className="text-sm font-bold text-[#9B59B6]">{selectedReport.frequencies.theta}%</span>
                                        </div>
                                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-[#9B59B6]"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${selectedReport.frequencies.theta}%` }}
                                                transition={{ duration: 0.8, delay: 0.3 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Model Information */}
                        <div className="mb-6 p-4 bg-gradient-to-r from-[#3B6F8E10] to-[#56B79A10] rounded-xl border border-[#D6E0E7]">
                            <div className="flex items-center gap-3 mb-2">
                                <Brain className="text-[#3B6F8E]" size={20} />
                                <span className="font-bold text-[#3B6F8E]">Hybrid BiGRU + BiLSTM Architecture</span>
                            </div>
                            <p className="text-sm text-gray-600">
                                Advanced deep learning model combining Bidirectional Gated Recurrent Units and 
                                Bidirectional Long Short-Term Memory networks for accurate emotion classification.
                            </p>
                        </div>

                        {/* Clinical Notes */}
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-[#3B6F8E] mb-3">Clinical Notes</h3>
                            <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                <p className="text-gray-700 leading-relaxed">{selectedReport.notes}</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <motion.button
                                className="btn-primary flex-1 py-3 flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    const reportWithPatientInfo = {
                                        id: selectedReport.id,
                                        date: selectedReport.date,
                                        emotion: selectedReport.emotion,
                                        dominantWave: selectedReport.dominantWave,
                                        accuracy: selectedReport.accuracy,
                                        summary: selectedReport.notes,
                                        recommendations: [
                                            "Continue monitoring brain wave patterns",
                                            "Maintain regular sleep schedule",
                                            "Practice stress management techniques",
                                            "Follow up in 2 weeks for progress assessment"
                                        ],
                                        patientName: selectedPatient.name,
                                        patientId: selectedPatient.id
                                    };
                                    generatePatientReport(reportWithPatientInfo);
                                }}
                            >
                                <Download size={18} />
                                Download Report
                            </motion.button>
                            <motion.button
                                className="btn-secondary flex-1 py-3 flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedReport(null)}
                            >
                                Close
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
