import multer from 'multer'
const storage = multer.diskStorage({
  destination: './upload',
  filename: (req, file, cb) => {
    cb(null, `${new Date().getTime()}-${file.originalname}`)
  },
})
const upload = multer({
  storage,
})
export default upload