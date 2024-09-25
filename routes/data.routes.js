import express from "express";
import {
  getAppliances,
  getBeautyProducts,
  getClothings,
  getElectronics,
} from "../controllers/data.controller.js";

const router = express.Router();

router.get("/electronics", getElectronics);
router.get("/clothings", getClothings);
router.get("/homeappliances", getAppliances);
router.get("/beautyproducts", getBeautyProducts);

export default router;
