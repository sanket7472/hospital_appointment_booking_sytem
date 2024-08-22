import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

const connectDB = async () => {
    const conn = await mongoose.connect(MONGO_URL)
    if (conn) {
        console.log("MongoDB connected 🎁")
    }
    else {
        console.log("MongoDB connection failed ❌")
    }

}
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


