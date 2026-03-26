"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
    Users, 
    Activity, 
    FileText, 
    Settings,
    TrendingUp,
    Brain,
    Shield,
    Database,
    BarChart3,
    Clock,
    CheckCircle,
    AlertCircle
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [showSettings, setShowSettings] = useState(false);
    const [showAnalytics, setShowAnalytics] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/access");
            return;
        }
        
        const userData = JSON.parse(storedUser);
        if (userData.role !== "admin") {
            router.push("/dashboard");
            return;
        }
        
        setUser(userData);
    }, [router]);

    if (!user) {
        return (
            <div className="min-h-screen bg-[#F4F7F9] flex items-center justify-center">
                <div className="spinner"></div>
            </div>
        );
    }

    const stats = [
        { icon: Users, label: "Total Users", value: "127", change: "+12%", color: "#3B6F8E" },
        { icon: Activity, label: "Active Sessions", value: "45", change: "+8%", color: "#56B79A" },
        { icon: FileText, label: "Total Reports", value: "1,234", change: "+23%", color: "#3B6F8E" },
        { icon: Database, label: "Data Storage", value: "2.4 GB", change: "+15%", color: "#56B79A" }
    ];

    const systemHealth = [
        { name: "API Server", status: "Operational", uptime: "99.9%", color: "#56B79A" },
        { name: "Database", status: "Operational", uptime: "99.8%", color: "#56B79A" },
        { name: "AI Model", status: "Operational", uptime: "98.5%", color: "#56B79A" },
        { name: "Storage", status: "Warning", uptime: "85%", color: "#E67E22" }
    ];

    const recentActivity = [
        { user: "Dr. Smith", action: "Uploaded EEG data", time: "2 mins ago", type: "upload" },
        { user: "Patient P001", action: "Downloaded report", time: "5 mins ago", type: "download" },
        { user: "Dr. Johnson", action: "Analyzed patient data", time: "12 mins ago", type: "analysis" },
        { user: "Admin", action: "Updated system settings", time: "1 hour ago", type: "settings" }
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

            <div className="relative z-10 container mx-auto px-6 py-8">
                {/* Header */}
                <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Shield className="text-[#3B6F8E]" size={32} />
                        <h1 className="text-4xl font-bold text-[#3B6F8E]">Admin Dashboard</h1>
                    </div>
                    <p className="text-gray-600">System overview and management</p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="card p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div 
                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                    style={{ backgroundColor: `${stat.color}20` }}
                                >
                                    <stat.icon style={{ color: stat.color }} size={24} />
                                </div>
                                <span className="text-sm font-semibold text-[#56B79A]">{stat.change}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                            <p className="text-3xl font-bold text-[#3B6F8E]">{stat.value}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* System Health */}
                    <motion.div
                        className="lg:col-span-2 card"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-xl flex items-center justify-center">
                                <Activity className="text-white" size={20} />
                            </div>
                            <h2 className="text-xl font-bold text-[#3B6F8E]">System Health</h2>
                        </div>

                        <div className="space-y-4">
                            {systemHealth.map((system, index) => (
                                <motion.div
                                    key={index}
                                    className="p-4 bg-[#F4F7F9] rounded-xl"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            {system.status === "Operational" ? (
                                                <CheckCircle style={{ color: system.color }} size={20} />
                                            ) : (
                                                <AlertCircle style={{ color: system.color }} size={20} />
                                            )}
                                            <div>
                                                <h3 className="font-semibold text-[#3B6F8E]">{system.name}</h3>
                                                <p className="text-sm text-gray-600">{system.status}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold" style={{ color: system.color }}>
                                                {system.uptime}
                                            </p>
                                            <p className="text-xs text-gray-600">Uptime</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <motion.button
                                onClick={() => setShowSettings(true)}
                                className="btn-primary py-3 flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Settings size={18} />
                                System Settings
                            </motion.button>
                            <motion.button
                                onClick={() => setShowAnalytics(true)}
                                className="btn-secondary py-3 flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <BarChart3 size={18} />
                                View Analytics
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Recent Activity */}
                    <motion.div
                        className="card"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[#56B79A20] rounded-xl flex items-center justify-center">
                                <Clock className="text-[#56B79A]" size={20} />
                            </div>
                            <h2 className="text-xl font-bold text-[#3B6F8E]">Recent Activity</h2>
                        </div>

                        <div className="space-y-3">
                            {recentActivity.map((activity, index) => (
                                <motion.div
                                    key={index}
                                    className="p-3 bg-[#F4F7F9] rounded-xl hover:bg-white transition-colors"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-[#3B6F8E20] rounded-lg flex items-center justify-center flex-shrink-0">
                                            {activity.type === "upload" && <TrendingUp className="text-[#3B6F8E]" size={16} />}
                                            {activity.type === "download" && <FileText className="text-[#56B79A]" size={16} />}
                                            {activity.type === "analysis" && <Brain className="text-[#3B6F8E]" size={16} />}
                                            {activity.type === "settings" && <Settings className="text-[#56B79A]" size={16} />}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-[#3B6F8E]">{activity.user}</p>
                                            <p className="text-xs text-gray-600">{activity.action}</p>
                                            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Model Performance */}
                <motion.div
                    className="card mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-xl flex items-center justify-center">
                            <Brain className="text-white" size={20} />
                        </div>
                        <h2 className="text-xl font-bold text-[#3B6F8E]">AI Model Performance</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="p-4 bg-[#F4F7F9] rounded-xl">
                            <p className="text-sm text-gray-600 mb-2">Model Accuracy</p>
                            <p className="text-3xl font-bold text-[#56B79A]">98.59%</p>
                            <p className="text-xs text-gray-500 mt-1">BiGRU + BiLSTM</p>
                        </div>
                        <div className="p-4 bg-[#F4F7F9] rounded-xl">
                            <p className="text-sm text-gray-600 mb-2">Avg Processing Time</p>
                            <p className="text-3xl font-bold text-[#3B6F8E]">87ms</p>
                            <p className="text-xs text-gray-500 mt-1">Per analysis</p>
                        </div>
                        <div className="p-4 bg-[#F4F7F9] rounded-xl">
                            <p className="text-sm text-gray-600 mb-2">Total Predictions</p>
                            <p className="text-3xl font-bold text-[#56B79A]">15.2K</p>
                            <p className="text-xs text-gray-500 mt-1">This month</p>
                        </div>
                        <div className="p-4 bg-[#F4F7F9] rounded-xl">
                            <p className="text-sm text-gray-600 mb-2">Model Version</p>
                            <p className="text-3xl font-bold text-[#3B6F8E]">v2.1</p>
                            <p className="text-xs text-gray-500 mt-1">Latest stable</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* System Settings Modal */}
            {showSettings && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setShowSettings(false)}
                >
                    <motion.div
                        className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-xl flex items-center justify-center">
                                    <Settings className="text-white" size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-[#3B6F8E]">System Settings</h2>
                            </div>
                            <button
                                onClick={() => setShowSettings(false)}
                                className="text-gray-400 hover:text-gray-600 text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-6">
                            {/* General Settings */}
                            <div>
                                <h3 className="text-lg font-bold text-[#3B6F8E] mb-4">General Settings</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-[#F4F7F9] rounded-xl">
                                        <div>
                                            <p className="font-semibold text-[#3B6F8E]">Maintenance Mode</p>
                                            <p className="text-sm text-gray-600">Enable system maintenance</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#56B79A]"></div>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-[#F4F7F9] rounded-xl">
                                        <div>
                                            <p className="font-semibold text-[#3B6F8E]">Auto Backup</p>
                                            <p className="text-sm text-gray-600">Daily automatic backups</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#56B79A]"></div>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-[#F4F7F9] rounded-xl">
                                        <div>
                                            <p className="font-semibold text-[#3B6F8E]">Email Notifications</p>
                                            <p className="text-sm text-gray-600">Send system alerts via email</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#56B79A]"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Security Settings */}
                            <div>
                                <h3 className="text-lg font-bold text-[#3B6F8E] mb-4">Security Settings</h3>
                                <div className="space-y-4">
                                    <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                        <label className="block text-sm font-semibold text-[#3B6F8E] mb-2">
                                            Session Timeout (minutes)
                                        </label>
                                        <input
                                            type="number"
                                            defaultValue="30"
                                            className="input w-full"
                                        />
                                    </div>

                                    <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                        <label className="block text-sm font-semibold text-[#3B6F8E] mb-2">
                                            Max Login Attempts
                                        </label>
                                        <input
                                            type="number"
                                            defaultValue="5"
                                            className="input w-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Save Button */}
                            <motion.button
                                className="btn-primary w-full py-3"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    alert("Settings saved successfully!");
                                    setShowSettings(false);
                                }}
                            >
                                Save Changes
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Analytics Modal */}
            {showAnalytics && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setShowAnalytics(false)}
                >
                    <motion.div
                        className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-xl flex items-center justify-center">
                                    <BarChart3 className="text-white" size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-[#3B6F8E]">System Analytics</h2>
                            </div>
                            <button
                                onClick={() => setShowAnalytics(false)}
                                className="text-gray-400 hover:text-gray-600 text-2xl"
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-6">
                            {/* Usage Statistics */}
                            <div>
                                <h3 className="text-lg font-bold text-[#3B6F8E] mb-4">Usage Statistics (Last 30 Days)</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                        <p className="text-sm text-gray-600 mb-1">Total Logins</p>
                                        <p className="text-3xl font-bold text-[#3B6F8E]">2,847</p>
                                        <p className="text-xs text-[#56B79A] mt-1">↑ 12% from last month</p>
                                    </div>
                                    <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                        <p className="text-sm text-gray-600 mb-1">EEG Analyses</p>
                                        <p className="text-3xl font-bold text-[#56B79A]">1,234</p>
                                        <p className="text-xs text-[#56B79A] mt-1">↑ 23% from last month</p>
                                    </div>
                                    <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                        <p className="text-sm text-gray-600 mb-1">Reports Generated</p>
                                        <p className="text-3xl font-bold text-[#3B6F8E]">1,156</p>
                                        <p className="text-xs text-[#56B79A] mt-1">↑ 18% from last month</p>
                                    </div>
                                    <div className="p-4 bg-[#F4F7F9] rounded-xl">
                                        <p className="text-sm text-gray-600 mb-1">Avg Session Time</p>
                                        <p className="text-3xl font-bold text-[#56B79A]">12m</p>
                                        <p className="text-xs text-[#E74C3C] mt-1">↓ 5% from last month</p>
                                    </div>
                                </div>
                            </div>

                            {/* Emotion Distribution */}
                            <div>
                                <h3 className="text-lg font-bold text-[#3B6F8E] mb-4">Emotion Classification Distribution</h3>
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-semibold text-[#56B79A]">Positive</span>
                                            <span className="text-sm font-bold text-[#56B79A]">45%</span>
                                        </div>
                                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-[#56B79A]"
                                                initial={{ width: 0 }}
                                                animate={{ width: "45%" }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-semibold text-[#95A5A6]">Neutral</span>
                                            <span className="text-sm font-bold text-[#95A5A6]">38%</span>
                                        </div>
                                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-[#95A5A6]"
                                                initial={{ width: 0 }}
                                                animate={{ width: "38%" }}
                                                transition={{ duration: 1, delay: 0.4 }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-semibold text-[#E74C3C]">Negative</span>
                                            <span className="text-sm font-bold text-[#E74C3C]">17%</span>
                                        </div>
                                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-[#E74C3C]"
                                                initial={{ width: 0 }}
                                                animate={{ width: "17%" }}
                                                transition={{ duration: 1, delay: 0.6 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* User Activity */}
                            <div>
                                <h3 className="text-lg font-bold text-[#3B6F8E] mb-4">User Activity by Role</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="p-4 bg-gradient-to-br from-[#3B6F8E10] to-[#56B79A10] rounded-xl border border-[#D6E0E7]">
                                        <p className="text-sm text-gray-600 mb-1">Doctors</p>
                                        <p className="text-2xl font-bold text-[#3B6F8E]">23</p>
                                        <p className="text-xs text-gray-500 mt-1">Active users</p>
                                    </div>
                                    <div className="p-4 bg-gradient-to-br from-[#56B79A10] to-[#3B6F8E10] rounded-xl border border-[#D6E0E7]">
                                        <p className="text-sm text-gray-600 mb-1">Patients</p>
                                        <p className="text-2xl font-bold text-[#56B79A]">104</p>
                                        <p className="text-xs text-gray-500 mt-1">Active users</p>
                                    </div>
                                    <div className="p-4 bg-gradient-to-br from-[#3B6F8E10] to-[#56B79A10] rounded-xl border border-[#D6E0E7]">
                                        <p className="text-sm text-gray-600 mb-1">Admins</p>
                                        <p className="text-2xl font-bold text-[#3B6F8E]">3</p>
                                        <p className="text-xs text-gray-500 mt-1">Active users</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
