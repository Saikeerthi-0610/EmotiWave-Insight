import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import Patient from "./models/Patient.js";
import EEGScan from "./models/EEGScan.js";

dotenv.config();

const seedData = async () => {
    try {
        await connectDB();
        
        console.log("🌱 Seeding database...");

        // Clear existing data
        await Patient.deleteMany({});
        await EEGScan.deleteMany({});
        console.log("✅ Cleared existing data");

        // Create sample patients
        const patient1 = await Patient.create({
            name: "John Doe",
            age: 28,
            gender: "male",
            email: "john@example.com"
        });

        const patient2 = await Patient.create({
            name: "Jane Smith",
            age: 32,
            gender: "female",
            email: "jane@example.com"
        });

        console.log("✅ Created sample patients");

        // Create sample EEG scans
        const scan1 = await EEGScan.create({
            patientId: patient1._id,
            patientName: patient1.name,
            readings: [
                { index: 0, alpha: 8.5, beta: 15.2, gamma: 30.1, theta: 5.3 },
                { index: 1, alpha: 9.1, beta: 14.8, gamma: 29.5, theta: 5.7 },
                { index: 2, alpha: 8.8, beta: 15.5, gamma: 31.2, theta: 5.1 },
                { index: 3, alpha: 9.3, beta: 14.2, gamma: 28.9, theta: 5.9 },
                { index: 4, alpha: 8.6, beta: 15.8, gamma: 30.7, theta: 5.4 }
            ],
            brainState: "Focused",
            averages: {
                alpha: 8.86,
                beta: 15.1,
                gamma: 30.08,
                theta: 5.48
            },
            fileName: "sample_scan_1.csv",
            notes: "Initial baseline scan"
        });

        const scan2 = await EEGScan.create({
            patientId: patient2._id,
            patientName: patient2.name,
            readings: [
                { index: 0, alpha: 12.5, beta: 10.2, gamma: 25.1, theta: 6.3 },
                { index: 1, alpha: 13.1, beta: 9.8, gamma: 24.5, theta: 6.7 },
                { index: 2, alpha: 12.8, beta: 10.5, gamma: 26.2, theta: 6.1 },
                { index: 3, alpha: 13.3, beta: 9.2, gamma: 23.9, theta: 6.9 },
                { index: 4, alpha: 12.6, beta: 10.8, gamma: 25.7, theta: 6.4 }
            ],
            brainState: "Relaxed",
            averages: {
                alpha: 12.86,
                beta: 10.1,
                gamma: 25.08,
                theta: 6.48
            },
            fileName: "sample_scan_2.csv",
            notes: "Relaxation session"
        });

        console.log("✅ Created sample EEG scans");
        console.log("\n📊 Database seeded successfully!");
        console.log(`   - Patients: ${await Patient.countDocuments()}`);
        console.log(`   - Scans: ${await EEGScan.countDocuments()}`);
        console.log("\n🔍 Check MongoDB Compass at: mongodb://localhost:27017/neuro_brain_scan");
        
        process.exit(0);
    } catch (error) {
        console.error("❌ Error seeding database:", error);
        process.exit(1);
    }
};

seedData();
