import mongoose from "mongoose";

const jobListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String },
  package: { type: String },
  type: { type: String, enum: ["full-time", "part-time", "contract", "internship"], required: true },
  postedDate: { type: Date, default: Date.now },
  listingTime: { type: Date, default: Date.now },
  jobDeadline: { type: Date, required: true },
  status: { type: String, enum: ["open", "closed"], default: "open" },
  url: { type: String },
  image: { type: String }, // Single image path (e.g., /uploads/job-image.jpg)
  eligibility: { type: [String], default: [] },
  files: [{ type: String }], // Array of file paths (e.g., /uploads/job-doc.pdf)
});

const JobListing = mongoose.model("JobListing", jobListingSchema);

export default JobListing;