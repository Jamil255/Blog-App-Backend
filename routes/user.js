import express from 'express'
import {
  signInFun,
  signInhandler,
  signUpFun,
  signUphandler,
} from '../controllers/auth.js'
const routes = express.Router()
routes.get('/api/signup', signUphandler)
routes.get('/api/login', signInhandler)
routes.get('/', async (req, res) => {
  res.render('home')
})
// auth api
routes.post('/api/signup', signUpFun)
routes.post('/api/login', signInFun)
export default routes
