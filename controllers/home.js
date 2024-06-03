import blogModel from '../models/postSchema.js'

export const getHomePage = async (req, res) => {
  try {
    const allBlog = await blogModel.find({})
    res.render('home', {
      user: req.user,
      blog: allBlog,
    })
  } catch (error) {
    res.json({
      error: error.message,
    })
  }
}
