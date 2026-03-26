import type { Request, Response } from "express";
import Patient from "../models/Patient.js";
import EEGScan from "../models/EEGScan.js";

export const getAllPatients = async (req: Request, res: Response) => {
    try {
        const patients = await Patient.find().sort({ createdAt: -1 });
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch patients" });
    }
};

export const getPatientById = async (req: Request, res: Response) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ error: "Patient not found" });
        }
        res.json(patient);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch patient" });
    }
};

export const createPatient = async (req: Request, res: Response) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json(patient);
    } catch (error) {
        res.status(500).json({ error: "Failed to create patient" });
    }
};

export const updatePatient = async (req: Request, res: Response) => {
    try {
        const patient = await Patient.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!patient) {
            return res.status(404).json({ error: "Patient not found" });
        }
        res.json(patient);
    } catch (error) {
        res.status(500).json({ error: "Failed to update patient" });
    }
};

export const deletePatient = async (req: Request, res: Response) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) {
            return res.status(404).json({ error: "Patient not found" });
        }
        await EEGScan.deleteMany({ patientId: req.params.id });
        res.json({ message: "Patient deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete patient" });
    }
};
