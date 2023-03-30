import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/**
 * GET USER 
 */
router.get("/:id", verifyToken, getUser); 

/** 
 * GET USER FRIENDS 
 */
router.get("/:id/friends", verifyToken, getUserFriends);

/** 
 * ADD REMOVE FRIENDS 
 */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
