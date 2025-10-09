import Slide from "../models/slideModel.js";

  export const getSlides = async (req, res) => {
    try {
      const slides = await Slide.find().sort({ createdAt: -1 });
      res.json({ success: true, slides });
    } catch (err) {
      console.error("Error fetching slides:", err);
      res.status(500).json({ success: false, message: err.message });
    }
  };

  export const createSlide = async (req, res) => {
    try {
      const { title, subtitle, cta } = req.body;
      const file = req.file;

      if (!file || !title) {
        return res.status(400).json({ success: false, message: "Media file and title are required" });
      }

      const mimeType = file.mimetype.toLowerCase();
      let type;
      if (mimeType.startsWith("image/")) {
        type = "image";
      } else if (mimeType.startsWith("video/")) {
        type = "video";
      } else {
        return res.status(400).json({ success: false, message: "Unsupported file type. Use JPG, PNG, JPEG, WEBP, MP4, or WEBM" });
      }

      const slide = new Slide({
        type,
        url: file.path,
        title,
        subtitle: subtitle || undefined,
        cta: cta || undefined,
      });
      await slide.save();

      res.status(201).json({ success: true, slide });
    } catch (err) {
      console.error("Error creating slide:", err);
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_UNEXPECTED_FIELD") {
          return res.status(400).json({ success: false, message: `Unexpected field in request. Expected file field named 'media'` });
        }
        return res.status(400).json({ success: false, message: `Multer error: ${err.message}` });
      }
      res.status(500).json({ success: false, message: err.message });
    }

  };
  export const deleteSlide = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the slide by ID
    const slide = await Slide.findById(id);
    if (!slide) {
      return res.status(404).json({ success: false, message: "Slide not found" });
    }

    // Delete the media file from Cloudinary
    if (slide.public_id) {
      await cloudinary.v2.uploader.destroy(slide.public_id, {
        resource_type: slide.type,
      });
    }

    // Delete the slide from MongoDB
    await Slide.findByIdAndDelete(id);

    res.json({ success: true, message: "Slide deleted successfully" });
  } catch (err) {
    console.error("Error deleting slide:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};
