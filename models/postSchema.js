import mongoose, { Schema } from 'mongoose'

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    coverImgUrl: {
      type: String,
      default:
        'https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717286400&semt=ais_user',
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
