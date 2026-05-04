import { Router } from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
const router = Router();

router.post('/login', login);
router.post('/register', signup);
router.post('/logout', logout);

export default router;
