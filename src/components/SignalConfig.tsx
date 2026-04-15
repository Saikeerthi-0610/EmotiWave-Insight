"use client";

import { useState } from "react";
import { uploadEEG } from "../services/api";
import EmotionCard from "./EmotionCard";
import EEGGraph from "./EEGGraph";

export default function SignalConfig() {
    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleUpload = async (e: any) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsLoading(true);
        setError(null);

        try {
            const res = await uploadEEG(file);
            setResult(res);
        } catch (err) {
            console.error('Upload error:', err);
            setError('Backend unavailable. Please try again later or use the live recording feature.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 p-6 rounded-xl shadow">

        <h2 className="mb-4 text-green-600 font-semibold">
            Signal Config
        </h2>

        <input 
            type="file" 
            onChange={handleUpload} 
            disabled={isLoading}
            className="mb-4"
        />

        {isLoading && (
            <div className="text-[#3B6F8E] font-semibold mb-4">
                Uploading and analyzing...
            </div>
        )}

        {error && (
            <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-xl mb-4">
                {error}
            </div>
        )}

        {result && (
            <>
            <EmotionCard {...result} />
            <EEGGraph />
            </>
        )}

        </div>
    );
}