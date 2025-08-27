import express from "express"
import { PostController } from "./blog.controller"


const router = express.Router()

router.get("/", PostController.getAllPosts)     
router.post("/", PostController.createPost)     
router.get("/:id", PostController.getSinglePost) 

export const BlogRoutes = router
