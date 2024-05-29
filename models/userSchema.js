import mongoose, { model } from 'mongoose'
import crypto, { createHmac, randomBytes } from 'crypto'

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
  const hashPass = createHmac('sha256', process.env.SALT_KEY)
    .update(user.password)
    .digest('hex')
  this.password = hashPass
  next()
})
const userModel = mongoose.model('user', userSchema)

export default userModel
