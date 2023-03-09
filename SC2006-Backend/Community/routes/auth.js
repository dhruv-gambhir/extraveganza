import express from "express";
import { deleteAccount, login, register, update } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/update", update);
router.post("/deleteAccount", deleteAccount)

export default router;
