import express from 'express'
import path from 'path'
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))


app.get("/", (req, res) => {
    res.render("home")
})
app.listen(PORT, (req, res) => {
  console.log(`listening on ${PORT}`)
})
