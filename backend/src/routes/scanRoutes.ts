import express from "express";
import {
    getAllScans,
    getScanById,
    getScansByPatient,
    deleteScan,
} from "../controllers/scanController.js";

const router = express.Router();

router.get("/", getAllScans);
router.get("/:id", getScanById);
router.get("/patient/:patientId", getScansByPatient);
router.delete("/:id", deleteScan);

export default router;
