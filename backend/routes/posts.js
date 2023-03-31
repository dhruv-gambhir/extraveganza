import express from "express";
import { getFeedPosts, getUserPosts, likePost, commentPost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/** 
 * READ 
 * Remvoed verify token for reading posts as user is not required to log in to read posts
 */
router.get("/", getFeedPosts);

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
router.post("/:id/comments", verifyToken, commentPost);

export default router;
