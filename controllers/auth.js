import userModel from '../models/userSchema.js'
import { createHmac } from 'crypto'
import { createJwtToken } from '../services/auth.js'

export const signInhandler = (req, res) => {
  try {
    res.status(202).render('login')
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: [],
      status: false,
    })
  }
}
export const signUphandler = (req, res) => {
  try {
    res.render('signup')
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: [],
      status: false,
    })
  }
}
export const signUpFun = async (req, res) => {
  try {
    const { fullName, email, password } = req.body
    if (!fullName || !email || !password) {
      console.log(email, password)
      res.status(400).json({
        message: 'all required fields',
        status: false,
      })
      return
    }
    const userRes = await userModel.create({
      fullName,
      email,
      password,
    })
    res.redirect('login')
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: [],
      status: false,
    })
  }
}
export const signInFun = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res.status(400).json({
        message: 'all required fields',
      })
      return
    }
    const user = await userModel.findOne({ email })
    if (!user) {
      res.render('login', {
        message: 'email and password incorrect',
      })
      return
    }
    const hashPass = createHmac('sha256', process.env.SALT_KEY)
      .update(password)
      .digest('hex')
    if (user?.password !== hashPass) {
      return res.render('login', {
        error: 'email and password is incorrect',
      })
    }
    const token = await createJwtToken(user)
    res.cookie('token', token).redirect('/')
  } catch (error) {
    res.json({
      message: error.message,
      data: [],
      status: false,
    })
  }
}
