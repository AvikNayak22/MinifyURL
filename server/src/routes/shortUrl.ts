import express from "express";
import {
  createUrl,
  deleteUrl,
  getAllUrl,
  getUrl,
} from "../controllers/shortUrl";

const router = express.Router();

router.post("/shortUrl", createUrl);
router.get("/shortUrl", getAllUrl);
router.get("/shortUrl/:id", getUrl);
router.post("/shortUrl/:id", deleteUrl);

export default router;
