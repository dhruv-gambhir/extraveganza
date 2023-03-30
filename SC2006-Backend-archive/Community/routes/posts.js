import express from "express";
import { getFeedPosts, getUserPosts, likePost,commentPost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/** 
 * READ 
 */
router.get("/", verifyToken, getFeedPosts);

/**
 * GRAB USER POSTS 
 */
router.get("/:userId/posts", verifyToken, getUserPosts);

/** 
 * UPDATE 
 */
router.patch("/:id/like", verifyToken, likePost);

/**
 * COMMENT 
 */
router.post("/:id/comments",verifyToken,commentPost);

export default router;
