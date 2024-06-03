export const logOutHandler = async (req, res) => {
  try {
    return res.clearCookie('token').redirect('/')
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}
