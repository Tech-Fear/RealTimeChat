import express from 'express'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import connectMongoDb from './DB/connection.js'
import protectRoute from './middleware/protectRoute.js'
import userRoutes from './routes/user.routes.js'

config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(cookieParser())
app.use(express.json())



app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT,async()=>{
    await connectMongoDb()
    console.log(`Server is running on port ${PORT}`)
})