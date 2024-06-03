import express from 'express'
import {
  signInFun,
  signInhandler,
  signUpFun,
  signUphandler,
} from '../controllers/auth.js'
import { logOutHandler } from '../controllers/logOutHandler.js'
import { getHomePage } from '../controllers/home.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
const routes = express.Router()

// get api
routes.get('/',authMiddleware, getHomePage)
routes.get('/api/signup', signUphandler)
routes.get('/api/login', signInhandler)
// auth api
routes.post('/api/signup', signUpFun)
routes.post('/api/login', signInFun)
// logout api

routes.get('/api/logout', logOutHandler)
export default routes
