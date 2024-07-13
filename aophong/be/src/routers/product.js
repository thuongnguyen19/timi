import { Router } from "express";
import { create, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product.js";

const router = Router();
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);
router.post("/products", create);
export default router;
