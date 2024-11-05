import express from "express";
const router = express.Router();
import {
  addFeatureImage,
  getFeatureImages,
} from "../../controllers/common/feature-controller.js";

router.post("/add", addFeatureImage);
router.get("/get", getFeatureImages);

export default router;
