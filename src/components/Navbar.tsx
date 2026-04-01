"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Activity, Radio, LogOut, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        // Check if user is logged in
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        router.push("/access");
    };

    return (
        <motion.div 
            className="topbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            {/* Left */}
            <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <Link href="/" className="flex items-center gap-3">
                    <motion.div 
                        className="w-10 h-10 bg-[#3B6F8E] rounded-xl flex items-center justify-center text-white"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Brain size={24} />
                    </motion.div>
                    <h1 className="text-xl font-bold text-[#3B6F8E]">
                        EmotiWave <span className="text-[#56B79A]">Insight</span>
                    </h1>
                </Link>
            </motion.div>

            {/* Right */}
            <div className="flex items-center gap-8">
                {!user ? (
                    // Not logged in - show public links
                    <>
                        <Link href="/" className="nav-link">HOME</Link>
                        <Link href="/methodology" className="nav-link">METHODOLOGY</Link>
                        <Link href="/access" className="nav-link">LOGIN</Link>
                    </>
                ) : user.role === "doctor" ? (
                    // Doctor - show all links
                    <>
                        <Link href="/dashboard" className="nav-link">DASHBOARD</Link>
                        <Link href="/monitor" className="nav-link">MONITOR</Link>
                        <Link href="/live-record" className="nav-link flex items-center gap-2">
                            <Radio size={16} />
                            LIVE RECORD
                        </Link>
                        <Link href="/methodology" className="nav-link">METHODOLOGY</Link>
                        
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-3 py-2 bg-[#3B6F8E20] rounded-lg">
                                <User size={16} className="text-[#3B6F8E]" />
                                <span className="text-sm font-semibold text-[#3B6F8E]">{user.name}</span>
                            </div>
                            <motion.button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 bg-[#E74C3C] text-white rounded-lg font-semibold hover:bg-[#C0392B] transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <LogOut size={16} />
                                Logout
                            </motion.button>
                        </div>
                    </>
                ) : user.role === "admin" ? (
                    // Admin - show all system links
                    <>
                        <Link href="/admin" className="nav-link">ADMIN</Link>
                        <Link href="/dashboard" className="nav-link">DOCTORS</Link>
                        <Link href="/monitor" className="nav-link">MONITOR</Link>
                        <Link href="/live-record" className="nav-link">LIVE RECORD</Link>
                        <Link href="/methodology" className="nav-link">METHODOLOGY</Link>
                        
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#3B6F8E20] to-[#56B79A20] rounded-lg border border-[#3B6F8E30]">
                                <User size={16} className="text-[#3B6F8E]" />
                                <span className="text-sm font-semibold text-[#3B6F8E]">{user.name}</span>
                                <span className="text-xs px-2 py-0.5 bg-[#56B79A] text-white rounded-full">Admin</span>
                            </div>
                            <motion.button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 bg-[#E74C3C] text-white rounded-lg font-semibold hover:bg-[#C0392B] transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <LogOut size={16} />
                                Logout
                            </motion.button>
                        </div>
                    </>
                ) : (
                    // Patient - show limited links
                    <>
                        <Link href="/patient-reports" className="nav-link">MY REPORTS</Link>
                        <Link href="/methodology" className="nav-link">METHODOLOGY</Link>
                        
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-3 py-2 bg-[#56B79A20] rounded-lg">
                                <User size={16} className="text-[#56B79A]" />
                                <span className="text-sm font-semibold text-[#56B79A]">{user.name}</span>
                            </div>
                            <motion.button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 bg-[#E74C3C] text-white rounded-lg font-semibold hover:bg-[#C0392B] transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <LogOut size={16} />
                                Logout
                            </motion.button>
                        </div>
                    </>
                )}

                {user && (
                    <motion.div 
                        className="badge"
                        animate={{ 
                            scale: [1, 1.05, 1],
                        }}
                        transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Activity size={14} />
                            </motion.div>
                            {user.role === "admin" ? "Admin Portal" : user.role === "doctor" ? "Doctor Portal" : "Patient Portal"}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
