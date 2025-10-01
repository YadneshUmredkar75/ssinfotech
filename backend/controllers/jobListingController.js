
import { error } from "console";
import JobListing from "../models/jobListingmodules.js";


const getJobListings = async (req, res) => {
  try {
    const jobListings = await JobListing.find();
    res.json(jobListings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch job listings" });
  }
};

const createJobListing = async (req, res) => {
  try {
    const { title, description, company, location, package: jobPackage, type, jobDeadline, url, eligibility } = req.body;

    // Validate required fields
    if (!title || !description || !company || !type || !jobDeadline) {
      return res.status(400).json({ error: "Title, description, company, type, and job deadline are required" });
    }

    // Handle single image upload
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    // Handle multiple file uploads for files
    const files = req.files ? req.files.map((file) => `/uploads/${file.filename}`) : [];

    // Handle eligibility safely
    const eligibilityArray = Array.isArray(eligibility)
      ? eligibility.map(item => String(item).trim())
      : typeof eligibility === "string"
      ? eligibility.split(",").map(item => item.trim())
      : [];

    const jobListing = new JobListing({
      title,
      description,
      company,
      location,
      package: jobPackage,
      type,
      jobDeadline: new Date(jobDeadline),
      url,
      image,
      eligibility: eligibilityArray,
      files,
    });
    await jobListing.save();
    res.json(jobListing); // Return the full document including _id
  } catch (err) {
    console.error("Create job listing error:", err); // Log error for debugging
    res.status(500).json({ error: "Failed to create job listing" });
  }
};

const deleteJobListing = async (req, res) => {
  try {
    console.log("req.params:", req.params);
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID parameter is missing" });
    }

    if (typeof id !== 'string' || !id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid job listing ID format" });
    }

    const result = await JobListing.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Job listing not found" });
    }
    res.json({ message: "Job listing deleted" });
  } catch (err) {
    console.error("Delete job listing error:", err);
    res.status(500).json({ error: "Failed to delete job listing" });
  }
};

export { getJobListings, createJobListing, deleteJobListing };