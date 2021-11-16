import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()


let MONGODB_URI = import.meta.env.VITE_MONGODB_URI  





if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}




let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
  

    cached.promise = mongoose.connect(MONGODB_URI, { useNewUrlParser: true,  useUnifiedTopology: true }).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}