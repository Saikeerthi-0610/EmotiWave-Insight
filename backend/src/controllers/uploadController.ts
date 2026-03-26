import type { Request, Response } from "express";
import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import Papa from "papaparse";
import Patient from "../models/Patient.js";
import EEGScan from "../models/EEGScan.js";

export const handleUpload = async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const fileContent = fs.readFileSync(req.file.path, "utf-8");
        
        Papa.parse(fileContent, {
            header: true,
            skipEmptyLines: true,
            dynamicTyping: true,
            complete: async (results: any) => {
                try {
                    const rows = results.data.map((r: any, index: number) => ({
                        index,
                        person: r.person || r.Person || "User",
                        alpha: Number(r.alpha ?? r.Alpha) || 0,
                        beta: Number(r.beta ?? r.Beta) || 0,
                        gamma: Number(r.gamma ?? r.Gamma) || 0,
                        theta: Number(r.theta ?? r.Theta) || 0,
                    }));

                    const persons = [...new Set(rows.map((r: any) => r.person))];
                    const savedScans = [];

                    for (const personName of persons) {
                        const userData = rows.filter((r: any) => r.person === personName);

                        let patient = await Patient.findOne({ name: personName });
                        if (!patient) {
                            patient = await Patient.create({ name: personName });
                        }

                        const avg = (key: string) =>
                            userData.reduce((s: number, d: any) => s + d[key], 0) / userData.length;

                        const averages = {
                            alpha: Number(avg("alpha").toFixed(2)),
                            beta: Number(avg("beta").toFixed(2)),
                            gamma: Number(avg("gamma").toFixed(2)),
                            theta: Number(avg("theta").toFixed(2)),
                        };

                        const last = userData[userData.length - 1];
                        let brainState = "Neutral";
                        if (last.alpha > last.beta) brainState = "Relaxed";
                        else if (last.beta > last.alpha) brainState = "Focused";

                        const scan = await EEGScan.create({
                            patientId: patient._id,
                            patientName: personName,
                            readings: userData,
                            brainState,
                            averages,
                            fileName: req.file!.originalname,
                        });

                        savedScans.push(scan);
                    }

                    fs.unlinkSync(req.file.path);

                    res.json({
                        success: true,
                        message: "EEG data uploaded successfully",
                        scans: savedScans,
                    });
                } catch (error) {
                    console.error("Error processing CSV:", error);
                    res.status(500).json({ error: "Failed to process CSV data" });
                }
            },
        });
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ error: "Upload failed" });
    }
};