import express from "express";
import { createPost, getFeedPosts, editPost, deletePost } from "../controllers/postController.js";

const router = express.Router();

/* READ POST */
router.get("/get", getFeedPosts);

/* CREATE POST */
router.post("/post", createPost);

/* UPDATE POSTS */
router.patch("/:id/edit", editPost);

/* DELETE POSTS */
router.delete("/:id/delete", deletePost)


export default router;