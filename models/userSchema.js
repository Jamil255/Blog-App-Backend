import mongoose, { model } from 'mongoose'
import crypto from 'crypto'

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  salt: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER',
  },
  profileImageUrl: {
    type: String,
    default:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywtViW41dOvXafbeIcql2cxqstpFck0ZAEFYwQi-SwQ&s',
  },
})

userSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) return
  const salt = randomBytes(16).toString()
  const hashPassword = createHmac('sha256', salt)
    .update(user.password)
    .digest('hex')
  next()
})

const userModel = mongoose.model('user', userSchema)

export default userModel
