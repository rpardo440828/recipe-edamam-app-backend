import express from "express";
import { login, logout, register } from "../controllers/auth.js";

const router = express.Router();

//Routes to our functions
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;