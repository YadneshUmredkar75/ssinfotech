import JobApplication from "../models/jobApplicationModel.js";
import JobListing from "../models/jobListingmodules.js";

const createJobApplication = async (req, res) => {
  try {
    console.log("req.body:", req.body);
    console.log("req.file:", req.file);

    const {
      jobTitle,
      name,
      email,
      phoneNumber,
      education,
      specialization,
      aggregate,
      passoutYear,
      skills,
      experience,
      preferredCompanies,
      message,
    } = req.body;

    // Validate required fields
    const missingFields = [];
    if (!jobTitle) missingFields.push("jobTitle");
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!phoneNumber) missingFields.push("phoneNumber");
    if (!req.file) missingFields.push("resume");
    if (missingFields.length > 0) {
      return res.status(400).json({ error: `Missing required fields: ${missingFields.join(", ")}` });
    }

    // Check if jobTitle exists in JobListing
    const jobExists = await JobListing.findOne({ title: jobTitle });
    if (!jobExists) {
      return res.status(400).json({ error: "Invalid job title" });
    }

    // Handle resume file upload
    const resume = `/uploads/${req.file.filename}`;

    // Parse and validate additional fields
    const parsedAggregate = parseFloat(aggregate);
    const parsedPassoutYear = parseInt(passoutYear);

    if (isNaN(parsedAggregate) || parsedAggregate < 0 || parsedAggregate > 100) {
      return res.status(400).json({ error: "Aggregate must be a number between 0 and 100" });
    }
    if (isNaN(parsedPassoutYear) || ![2024, 2025, 2026, 2027].includes(parsedPassoutYear)) {
      return res.status(400).json({ error: "Passout year must be 2024, 2025, 2026, or 2027" });
    }

    const jobApplication = new JobApplication({
      jobTitle,
      name,
      email,
      phoneNumber,
      education,
      specialization,
      aggregate: parsedAggregate,
      passoutYear: parsedPassoutYear,
      skills,
      experience,
      preferredCompanies,
      resume,
      message,
      company: jobExists.company, // Assuming JobListing has a company field
    });

    await jobApplication.save();
    res.status(201).json({ message: "Application submitted successfully", applicationId: jobApplication._id });
  } catch (err) {
    console.error("Create job application error:", err);
    res.status(500).json({ error: "Failed to submit application", details: err.message });
  }
};

const getJobTitles = async (req, res) => {
  try {
    const { title } = req.query;
    let query = {};

    // Case-insensitive partial match for title
    if (title) {
      query.title = { $regex: title, $options: "i" };
    }

    const jobListings = await JobListing.find(query, "title"); // Only fetch title field
    const jobTitles = jobListings.map((job) => job.title);
    res.json(jobTitles);
  } catch (err) {
    console.error("Fetch job titles error:", err);
    res.status(500).json({ error: "Failed to fetch job titles", details: err.message });
  }
};

const getAllJobApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find();
    res.json(applications);
  } catch (err) {
    console.error("Fetch job applications error:", err);
    res.status(500).json({ error: "Failed to fetch job applications", details: err.message });
  }
};

export { createJobApplication, getJobTitles, getAllJobApplications };