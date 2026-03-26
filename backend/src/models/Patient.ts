import mongoose, { Schema, Document } from "mongoose";

export interface IPatient extends Document {
    name: string;
    age?: number;
    gender?: string;
    email?: string;
    createdAt: Date;
    updatedAt: Date;
}

const PatientSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number },
        gender: { type: String, enum: ["male", "female", "other"] },
        email: { type: String, unique: true, sparse: true },
    },
    { timestamps: true }
);

export default mongoose.model<IPatient>("Patient", PatientSchema);
