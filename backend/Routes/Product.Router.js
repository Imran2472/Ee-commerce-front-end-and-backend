import express from "express";
import multer from "multer";

import {
  addProduct,
  DeleteProduct,
  GetProduct,
  GetProductById,
  UpdateProduct,
} from "../Controller/Product.Controller.js";
const router = express.Router();

const imageConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: imageConfig });
const cpUpload = upload.fields([
  { name: "imageSrc", maxCount: 1 },
  { name: "imageSrc1", maxCount: 1 },
  { name: "imageSrc2", maxCount: 1 },
  { name: "imageSrc3", maxCount: 1 },
]);

router.post("/add", cpUpload, addProduct);
router.get("/all", GetProduct);
router.get("/:id", GetProductById);
router.put("/:id", cpUpload, UpdateProduct);
router.delete("/:id", DeleteProduct);
export default router;
