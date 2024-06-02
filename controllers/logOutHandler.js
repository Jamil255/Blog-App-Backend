export const logOutHandler = async (req, res) => {
  try {
    res.clearCookie('token')
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}
