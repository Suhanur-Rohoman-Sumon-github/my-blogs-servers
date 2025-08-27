export type TPost = {
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  imageUrl: string
  featured: boolean
  author: {
    name: string
    avatar: string
  }
  readTime: number
  publishedAt: string
}
