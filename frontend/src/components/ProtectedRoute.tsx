"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

interface ProtectedRouteProps {
    children: React.ReactNode;
    requireDoctor?: boolean;
}

export default function ProtectedRoute({ children, requireDoctor = false }: ProtectedRouteProps) {
    const { isAuthenticated, isDoctor, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/access");
        } else if (requireDoctor && !isDoctor) {
            router.push("/patient-reports");
        }
    }, [isAuthenticated, isDoctor, requireDoctor, router]);

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-[#F4F7F9] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <div className="w-20 h-20 bg-[#3B6F8E20] rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Lock className="text-[#3B6F8E]" size={40} />
                    </div>
                    <h2 className="text-2xl font-bold text-[#3B6F8E] mb-2">Authentication Required</h2>
                    <p className="text-gray-600">Redirecting to login...</p>
                </motion.div>
            </div>
        );
    }

    if (requireDoctor && !isDoctor) {
        return (
            <div className="min-h-screen bg-[#F4F7F9] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <div className="w-20 h-20 bg-[#E74C3C20] rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Lock className="text-[#E74C3C]" size={40} />
                    </div>
                    <h2 className="text-2xl font-bold text-[#E74C3C] mb-2">Access Denied</h2>
                    <p className="text-gray-600">This page is only accessible to doctors</p>
                </motion.div>
            </div>
        );
    }

    return <>{children}</>;
}
