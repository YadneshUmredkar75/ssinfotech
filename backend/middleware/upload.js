import multer from "multer";
import { extname, join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, join(__dirname, "../uploads")); // Ensure Uploads directory exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname).toLowerCase()}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /\.(jpe?g|png|pdf|doc|docx)$/i;
  const ext = extname(file.originalname).toLowerCase();
  const isValid = allowedTypes.test(ext) && allowedTypes.test(file.mimetype);

  if (isValid) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG, JPG, PNG, PDF, DOC, and DOCX files are allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit per file
    files: 5, // Max 5 files for multiple uploads (e.g., job listing files)
  },
});

export default upload;