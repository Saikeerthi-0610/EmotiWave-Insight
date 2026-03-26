import mongoose, { Schema, Document } from "mongoose";

export interface IEEGReading {
    index: number;
    alpha: number;
    beta: number;
    gamma: number;
    theta: number;
    timestamp?: Date;
}

export interface IEEGScan extends Document {
    patientId: mongoose.Types.ObjectId;
    patientName: string;
    readings: IEEGReading[];
    brainState: string;
    averages: {
        alpha: number;
        beta: number;
        gamma: number;
        theta: number;
    };
    fileName?: string;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
}

const EEGReadingSchema = new Schema({
    index: { type: Number, required: true },
    alpha: { type: Number, required: true },
    beta: { type: Number, required: true },
    gamma: { type: Number, required: true },
    theta: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

const EEGScanSchema: Schema = new Schema(
    {
        patientId: { type: Schema.Types.ObjectId, ref: "Patient", required: true },
        patientName: { type: String, required: true },
        readings: [EEGReadingSchema],
        brainState: { type: String, default: "Neutral" },
        averages: {
            alpha: { type: Number, default: 0 },
            beta: { type: Number, default: 0 },
            gamma: { type: Number, default: 0 },
            theta: { type: Number, default: 0 },
        },
        fileName: { type: String },
        notes: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model<IEEGScan>("EEGScan", EEGScanSchema);
