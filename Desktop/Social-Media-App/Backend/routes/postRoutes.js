import express from "express";
import {createPost} from "../controllers/postController.js";
import {getPost} from "../controllers/postController.js";
import {deletePost} from "../controllers/postController.js";
import {likedUnlikedPost} from "../controllers/postController.js";
import {replyToPost} from "../controllers/postController.js";
import {getFeedPost} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoutes.js";

const router = express.Router();

router.get("/feed", protectRoute, getFeedPost);
router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/like/:id", protectRoute, likedUnlikedPost);
router.post("/reply/:id", protectRoute, replyToPost);

export default router;
