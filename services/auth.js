import jwt from 'jsonwebtoken'
export const createJwtToken = async (user) => {
  const payload = {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    profileImageUrl: user.profileImageUrl,
  }
  const token = jwt.sign(payload, process.env.SECRET_KEY)
  return token
}

export const validateToken = (token) => {
  const payload = jwt.verify(token, process.env.SECRET_KEY)
  return payload
}
