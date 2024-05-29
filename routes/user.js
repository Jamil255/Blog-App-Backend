import express from 'express'
import {
  signInFun,
  signInhandler,
  signUpFun,
  signUphandler,
} from '../controllers/auth.js'
const routes = express.Router()

// get api 
routes.get('/api/signup', signUphandler)
routes.get('/api/login', signInhandler)
// auth api
routes.post('/api/signup', signUpFun)
routes.post('/api/login', signInFun)
export default routes
