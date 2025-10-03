import express from "express";
import {
  uploadArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  retryProcessing,
  searchArticles,
  summarizeUrl
} from "../controllers/articleController.js";
import { uploadMiddleware } from "../services/cloudinaryService.js"; // Updated

const router = express.Router();

// Regular routes
router.get("/", getArticles);
router.get("/search/:query", searchArticles);
router.post("/upload", uploadMiddleware, uploadArticle); // Use the middleware
router.post("/summarize-url", summarizeUrl);

// Parameterized routes
router.get("/:id", getArticleById);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);
router.post("/:id/retry", retryProcessing);

export default router;