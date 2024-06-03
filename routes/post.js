import express from 'express'
import {
  getBlogPage,
  getPostPage,
  handleBlogPost,
  handlerCommentFun,
} from '../controllers/post.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import upload from '../middlewares/multer.js'
const route = express.Router()

route.get('/api/blog', authMiddleware, getPostPage)
route.get('/blog/:id', authMiddleware, getBlogPage)
route.post('/api/comment/:blogId', authMiddleware, handlerCommentFun)
route.post(
  '/api/post',
  [authMiddleware, upload.single('coverImgUrl')],
  handleBlogPost
)

export default route
