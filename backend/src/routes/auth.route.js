import { Router } from "express";
import { singIn, signUp, logOut } from "../controllers/auth.controller.js";
const router = Router();

router.post('/login', singIn);
router.post('/register', signUp);
router.post('/logout', logOut);

export default router;
