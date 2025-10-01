import express from "express";
import { createJobApplication, getJobTitles, getAllJobApplications } from "../controllers/jobApplicationController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/applications", upload.single("resume"), createJobApplication);
router.get("/job-titles", getJobTitles);
router.get("/get-allapplication", getAllJobApplications);

export default router;