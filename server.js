import express from 'express'
import path from 'path'
import routes from './routes/user.js'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import { authMiddleware } from './middlewares/authMiddleware.js'
import route from './routes/post.js'
const app = express()
const PORT = 3000
connectDb()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.use(cookieParser())
app.use(routes)
app.use(route)

app.get('/', authMiddleware, async (req, res) => {
  res.render('home', {
    user: req.user,
  })
})
app.listen(PORT, (req, res) => {
  console.log(`listening on ${PORT}`)
})
