import mongoose, { Schema } from 'mongoose'

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
    coverImgUrl: {
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
  }
)

const blogModel = mongoose.model('blog', blogSchema)
export default blogModel
