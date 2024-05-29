import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Connect to ${db.connection.host}`)
  } catch (error) {
    console.log(error.message)
  }
}

export default connectDb
