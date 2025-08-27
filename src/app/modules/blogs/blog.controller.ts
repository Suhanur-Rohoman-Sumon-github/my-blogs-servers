import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendRespone"
import { StatusCodes } from "http-status-codes"
import { PostServices } from "./blog.service"


const createPost = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await PostServices.createPostInDB(req.body)

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Post created successfully",
    data: result,
  })
})

const getAllPosts = catchAsync(async (req, res) => {
  const result = await PostServices.getAllPostsFromDB()

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Posts retrieved successfully",
    data: result,
  })
})

const getSinglePost = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await PostServices.getSinglePostFromDB(id)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Post retrieved successfully",
    data: result,
  })
})

export const PostController = {
  createPost,
  getAllPosts,
  getSinglePost,
}
