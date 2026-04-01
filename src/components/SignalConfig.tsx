"use client";

import { useState } from "react";
import { uploadEEG } from "../services/api";
import EmotionCard from "./EmotionCard";
import EEGGraph from "./EEGGraph";

export default function SignalConfig() {
    const [result, setResult] = useState<any>(null);

    const handleUpload = async (e: any) => {
        const file = e.target.files[0];
        const res = await uploadEEG(file);
        setResult(res);
    };

    return (
        <div className="bg-gray-100 p-6 rounded-xl shadow">

        <h2 className="mb-4 text-green-600 font-semibold">
            Signal Config
        </h2>

        <input type="file" onChange={handleUpload} />

        {result && (
            <>
            <EmotionCard {...result} />
            <EEGGraph />
            </>
        )}

        </div>
    );
}