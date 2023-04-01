import express from "express";
import { createPost, getFeedPosts, getUserPosts, likePost,commentPost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/**
* CREATE
*/

router.post("/posts/:title", verifyToken, createPost);
// a new post is being created with the specified title in the URL path parameter.


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
