import jwt from 'jsonwebtoken'

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token

  try {
    const isVerify = jwt.verify(token, process.env.SECRET_KEY)
    req.user = isVerify
    if (isVerify) {
      next()
    }
  } catch (error) {
    // If verification fails, redirect the user to the login page
    res.render('login')
  }
}
