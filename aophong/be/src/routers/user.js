import { Router } from "express";
import { register, login, getAllUsers, getUserById } from "../controllers/user.js";
import { authenticate } from "../middleware/auth.js";

const router = Router();
router.post("/register", register);
router.post("/login", login);
router.get("/users", getAllUsers, authenticate);
router.get('/:id',authenticate, getUserById);





router.get('/users', authenticate, authorize(['admin']), getAllUsers);

export default router;
