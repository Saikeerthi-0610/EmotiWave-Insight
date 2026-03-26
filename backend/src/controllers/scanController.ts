import type { Request, Response } from "express";
import EEGScan from "../models/EEGScan.js";

export const getAllScans = async (req: Request, res: Response) => {
    try {
        const scans = await EEGScan.find()
            .populate("patientId")
            .sort({ createdAt: -1 });
        res.json(scans);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch scans" });
    }
};

export const getScanById = async (req: Request, res: Response) => {
    try {
        const scan = await EEGScan.findById(req.params.id).populate("patientId");
        if (!scan) {
            return res.status(404).json({ error: "Scan not found" });
        }
        res.json(scan);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch scan" });
    }
};

export const getScansByPatient = async (req: Request, res: Response) => {
    try {
        const scans = await EEGScan.find({ patientId: req.params.patientId })
            .sort({ createdAt: -1 });
        res.json(scans);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch patient scans" });
    }
};

export const deleteScan = async (req: Request, res: Response) => {
    try {
        const scan = await EEGScan.findByIdAndDelete(req.params.id);
        if (!scan) {
            return res.status(404).json({ error: "Scan not found" });
        }
        res.json({ message: "Scan deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete scan" });
    }
};
