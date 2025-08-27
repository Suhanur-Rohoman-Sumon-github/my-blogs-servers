import { Schema, model } from "mongoose"
import { TPost } from "./blogs.interface"


const postSchema = new Schema<TPost>(
  {
    title: { type: String, required: true, trim: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    tags: { type: [String], default: [] },
    imageUrl: { type: String, required: true },
    featured: { type: Boolean, default: false },
    author: {
      name: { type: String, required: true },
      avatar: { type: String, required: true },
    },
    readTime: { type: Number, required: true },
    publishedAt: { type: String, required: true },
  },
  { timestamps: true }
);




const PostModel = model<TPost>("Post", postSchema)

export default PostModel
