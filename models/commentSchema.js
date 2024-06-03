import mongoose, { Schema } from 'mongoose'

const commentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: 'blog',
    },
  },
  { timestamps: true }
)

const CommentModel = mongoose.model('comment', commentSchema)
export default CommentModel
