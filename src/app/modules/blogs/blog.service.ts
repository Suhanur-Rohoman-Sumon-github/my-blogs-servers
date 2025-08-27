import PostModel from "./blog.model"
import { TPost } from "./blogs.interface"


const createPostInDB = async (payload: TPost) => {
  const post = await PostModel.create(payload)
  return post
}

const getAllPostsFromDB = async () => {
  const posts = await PostModel.find().sort({ createdAt: -1 })
  return posts
}

const getSinglePostFromDB = async (id: string) => {
  const post = await PostModel.findById(id)
  return post
}

export const PostServices = {
  createPostInDB,
  getAllPostsFromDB,
  getSinglePostFromDB,
}
