"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, User, Phone, IdCard, Briefcase, ArrowRight, Mail, CheckCircle } from "lucide-react";

export default function AuthForm() {
    const [mode, setMode] = useState("login");
    const [role, setRole] = useState("patient");
    const [formData, setFormData] = useState({
        name: "",
        designation: "",
        patientId: "",
        phone: "",
        email: ""
    });
    const [otpSent, setOtpSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleRequestOTP = async () => {
        // Validate required fields
        if (mode === "login") {
            if (!formData.patientId || !formData.phone) {
                alert("Please fill in all required fields");
                return;
            }
        } else {
            if (!formData.name || !formData.phone) {
                alert("Please fill in all required fields");
                return;
            }
            if (role === "doctor" && !formData.designation) {
                alert("Please enter your designation");
                return;
            }
        }

        setIsLoading(true);

        // Simulate OTP sending and auto-login (replace with actual API call)
        setTimeout(() => {
            setOtpSent(true);
            setIsLoading(false);
            
            // Auto-login after OTP (simulated)
            const userData = {
                id: mode === "login" ? formData.patientId : `${role === "admin" ? "A" : role === "doctor" ? "D" : "P"}${Date.now()}`,
                name: mode === "login" ? "User" : formData.name,
                role: role as "doctor" | "patient" | "admin",
                phone: formData.phone
            };
            
            // Store in localStorage and redirect
            localStorage.setItem("user", JSON.stringify(userData));
            
            // Redirect based on role
            setTimeout(() => {
                if (role === "admin") {
                    window.location.href = "/admin";
                } else if (role === "doctor") {
                    window.location.href = "/dashboard";
                } else {
                    window.location.href = "/patient-reports";
                }
            }, 1000);
            
            alert(`OTP verified! Logging in as ${role}...`);
        }, 1500);
    };

    const isFormValid = () => {
        if (mode === "login") {
            return formData.patientId && formData.phone;
        } else {
            if (role === "doctor") {
                return formData.name && formData.designation && formData.phone;
            }
            return formData.name && formData.phone;
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="card w-full max-w-md text-center relative overflow-hidden"
        >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#56B79A] opacity-5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#3B6F8E] opacity-5 rounded-full -ml-12 -mb-12"></div>

            {/* Logo */}
            <motion.div 
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-xl flex items-center justify-center text-white text-xl shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <Brain size={32} />
            </motion.div>

            <motion.h2 
                className="text-2xl font-bold text-[#3B6F8E] mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Welcome Back
            </motion.h2>
            <motion.p 
                className="text-sm text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Access your neural health dashboard
            </motion.p>

            {/* Toggle Login/Register */}
            <div className="toggle-group relative mb-4">
                <motion.div
                    layout
                    className="absolute top-1 bottom-1 w-1/2 bg-white rounded-lg shadow-md"
                    animate={{ x: mode === "login" ? 0 : "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />

                <button 
                    className={`toggle-btn z-10 transition-colors ${mode === "login" ? "text-[#3B6F8E] font-semibold" : ""}`}
                    onClick={() => {
                        setMode("login");
                        setOtpSent(false);
                    }}
                >
                    Login
                </button>
                <button 
                    className={`toggle-btn z-10 transition-colors ${mode === "register" ? "text-[#3B6F8E] font-semibold" : ""}`}
                    onClick={() => {
                        setMode("register");
                        setOtpSent(false);
                    }}
                >
                    Register
                </button>
            </div>

            {/* Role Toggle */}
            <div className="toggle-group relative mb-6">
                <motion.div
                    layout
                    className="absolute top-1 bottom-1 bg-white rounded-lg shadow-md"
                    style={{ width: "33.33%" }}
                    animate={{ 
                        left: role === "patient" ? "0%" : role === "doctor" ? "33.33%" : "66.66%"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />

                <button 
                    className={`toggle-btn z-10 transition-colors ${role === "patient" ? "text-[#3B6F8E] font-semibold" : ""}`}
                    onClick={() => {
                        setRole("patient");
                        setOtpSent(false);
                    }}
                    style={{ flex: 1 }}
                >
                    Patient
                </button>
                <button 
                    className={`toggle-btn z-10 transition-colors ${role === "doctor" ? "text-[#3B6F8E] font-semibold" : ""}`}
                    onClick={() => {
                        setRole("doctor");
                        setOtpSent(false);
                    }}
                    style={{ flex: 1 }}
                >
                    Doctor
                </button>
                <button 
                    className={`toggle-btn z-10 transition-colors ${role === "admin" ? "text-[#3B6F8E] font-semibold" : ""}`}
                    onClick={() => {
                        setRole("admin");
                        setOtpSent(false);
                    }}
                    style={{ flex: 1 }}
                >
                    Admin
                </button>
            </div>

            {/* Inputs with Animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={mode + role}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                >
                    {mode === "register" && (
                        <>
                            <motion.div 
                                className="relative"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <input 
                                    className="input w-full" 
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                />
                            </motion.div>
                            {role === "doctor" && (
                                <motion.div 
                                    className="relative"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <input 
                                        className="input w-full" 
                                        placeholder="Designation"
                                        value={formData.designation}
                                        onChange={(e) => handleInputChange("designation", e.target.value)}
                                    />
                                </motion.div>
                            )}
                        </>
                    )}

                    {mode === "login" && (
                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <input 
                                className="input w-full" 
                                placeholder="Patient ID"
                                value={formData.patientId}
                                onChange={(e) => handleInputChange("patientId", e.target.value)}
                            />
                        </motion.div>
                    )}

                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: mode === "register" && role === "doctor" ? 0.3 : 0.2 }}
                    >
                        <input 
                            className="input w-full" 
                            placeholder="Phone Number"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                    </motion.div>

                    {mode === "register" && (
                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: role === "doctor" ? 0.4 : 0.3 }}
                        >
                            <input 
                                className="input w-full" 
                                placeholder="Email (Optional)"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                            />
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* OTP Success Message */}
            {otpSent && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-[#56B79A20] border border-[#56B79A] rounded-xl flex items-center gap-2 text-sm text-[#3B6F8E]"
                >
                    <CheckCircle className="text-[#56B79A]" size={18} />
                    <span>OTP sent successfully! Check your phone{formData.email ? " and email" : ""}.</span>
                </motion.div>
            )}

            {/* Button */}
            <motion.button
                whileHover={{ scale: isFormValid() ? 1.02 : 1 }}
                whileTap={{ scale: isFormValid() ? 0.98 : 1 }}
                className={`w-full mt-6 flex items-center justify-center gap-2 group py-3 rounded-xl font-semibold transition-all ${
                    isFormValid() 
                        ? "bg-[#56B79A] hover:bg-[#4da88d] text-white cursor-pointer" 
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                onClick={handleRequestOTP}
                disabled={!isFormValid() || isLoading}
            >
                {isLoading ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                    </>
                ) : (
                    <>
                        <span>{mode === "login" ? "Request OTP" : "Register & Get OTP"}</span>
                        <motion.div
                            animate={{ x: isFormValid() ? [0, 5, 0] : 0 }}
                            transition={{ duration: 1.5, repeat: isFormValid() ? Infinity : 0 }}
                        >
                            <ArrowRight size={20} />
                        </motion.div>
                    </>
                )}
            </motion.button>

            {/* Footer */}
            <motion.p 
                className="text-xs text-gray-500 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                By continuing, you agree to our Terms of Service and Privacy Policy
            </motion.p>
        </motion.div>
    );
}
