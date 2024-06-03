import express from 'express'
import { getPostPage, handleBlogPost } from '../controllers/post.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import upload from '../middlewares/multer.js'
const route = express.Router()

route.get('/api/blog', authMiddleware, getPostPage)
route.post(
  '/api/post',
  [authMiddleware, upload.single('coverImgUrl')],
  handleBlogPost
)

export default route
