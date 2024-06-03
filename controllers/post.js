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
export const handleBlogPost = (req, res) => {
  try {
    console.log(req.body)
    console.log(req.file)
  } catch (error) {}
}
