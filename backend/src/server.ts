import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import scanRoutes from "./routes/scanRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.json({ 
        message: "Neuro Brain Scan API", 
        version: "1.0.0",
        endpoints: {
            health: "/api/health",
            upload: "/api/upload",
            patients: "/api/patients",
            scans: "/api/scans"
        }
    });
});

app.get("/.well-known/*", (req, res) => {
    res.status(404).json({ error: "Not found" });
});

app.use("/api/upload", uploadRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/scans", scanRoutes);

app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Server is running" });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});