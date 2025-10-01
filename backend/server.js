import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import jobListingRoutes from "./routes/jobListingRoutes.js";
import jobApplicationRoutes from "./routes/jobApplicationRoutes.js";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Support form-data for file uploads
app.use("/uploads", express.static(join(__dirname, "uploads"))); // Serve uploaded files

// Routes
app.use("/api/joblistings", jobListingRoutes);
app.use("/api", jobApplicationRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});