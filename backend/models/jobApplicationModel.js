import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  // Basic Applicant Information
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'],
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    match: [/^\+?[1-9]\d{9,14}$/, 'Please enter a valid phone number'],
  },

  // Job Application Details
  jobTitle: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String, // Optional reference to the company name from the drive
    trim: true,
  },

  // Educational Background
  education: {
    type: String,
    enum: ['btech', 'bca', 'mca', 'mtech', 'other'], // Matches dropdown options
    required: true,
  },
  specialization: {
    type: String,
    enum: ['cse', 'it', 'ece', 'mechanical', 'civil', 'other'], // Matches dropdown options
    required: true,
  },
  aggregate: {
    type: Number, // Percentage
    min: 0,
    max: 100,
    required: true,
  },
  passoutYear: {
    type: Number,
    enum: [2024, 2025, 2026, 2027], // Matches dropdown options
    required: true,
  },

  // Additional Details
  skills: {
    type: String,
    trim: true,
  },
  experience: {
    type: String,
    trim: true,
  },
  preferredCompanies: {
    type: String,
    trim: true,
  },
  resume: {
    type: String, // File path or URL to the uploaded resume
    required: true,
  },

  // Metadata
  message: {
    type: String, // Combined educational and experience details
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'accepted', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update updatedAt on save
applicationSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Application = mongoose.model('Application', applicationSchema);
export default Application;

