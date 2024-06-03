import { cloudinaryUploader } from '../config/cloudinaryConfig.js'
import CommentModel from '../models/commentSchema.js'
import blogModel from '../models/postSchema.js'
import fs from 'fs'

export const getPostPage = (req, res) => {
  try {
    res.render('post', {
      user: req.user,
    })
  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}
export const handleBlogPost = async (req, res) => {
  try {
    const uploadRes = await cloudinaryUploader.upload(req.file.path)
    const { title, desc } = req.body
    const blog = await blogModel.create({
      title,
      desc,
      createdBy: req.user._id,
      coverImgUrl: uploadRes.secure_url,
    })
    fs.unlinkSync(req.file.path)
    return res.redirect(`/blog/${blog._id}`)
  } catch (error) {
    console.log(error.message)
    return res.status(500).render('/')
  }
}

export const getBlogPage = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id).populate('createdBy')
    const comment = await CommentModel.find({ blogId: req.params.id }).populate(
      'createdBy'
    )
    return res.render('blog', {
      user: req.user,
      blog,
      comment,
    })
  } catch (error) {
    res.json({
      error: error.message,
    })
  }
}

export const handlerCommentFun = async (req, res) => {
  try {
    console.log(req?.user?._id)
    await CommentModel.create({
      content: req.body.content,
      blogId: req.params.blogId,
      createdBy: req.user?._id,
    })
    res.redirect(`/blog/${req.params.blogId}`)
  } catch (error) {
    console.log(error.message)
    res.json({
      error: error.message,
    })
  }
}
