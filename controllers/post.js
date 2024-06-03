import { cloudinaryUploader } from '../config/cloudinaryConfig.js'
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
