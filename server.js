import express from 'express'
import path from 'path'
import routes from './routes/user.js'
import connectDb from './config/db.js'
const app = express()
const PORT = 3000
connectDb()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))
app.use(routes)
app.listen(PORT, (req, res) => {
  console.log(`listening on ${PORT}`)
})
