import { Router } from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
const router = Router();

router.post('/login', singIn);
router.post('/register', login);
router.post('/logout', logout);

export default router;
