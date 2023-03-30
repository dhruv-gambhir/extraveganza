import express from "express";
import { createPost, getFeedPosts, getUserPosts, likePost,commentPost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/**
* CREATE
*/

router.post("/", verifyToken, createPost);

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
