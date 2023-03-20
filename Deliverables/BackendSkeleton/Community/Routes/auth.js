import express from "express";
import { deleteAccount, login, register, update } from "../controllers/auth.js";

const router = express.Router();

/* LOGIN */
router.post("/login", login);

/* REGISTER */
router.post("/register", register);

/* UPDATE PASSWORD */
router.post("/update", update);

/* DELETE ACCOUNT */
router.post("/deleteAccount", deleteAccount)

export default router;
