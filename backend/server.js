import express from 'express'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'


import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import connectMongoDb from './DB/connection.js'
import protectRoute from './middleware/protectRoute.js'
import userRoutes from './routes/user.routes.js'
import {app, server} from './socket/socketIo.js'



config()
const PORT = process.env.PORT || 3000
// app.use(cors())

app.use(cookieParser())
app.use(express.json())



app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

server.listen(PORT,async()=>{
    await connectMongoDb()
    console.log(`Server is running on port ${PORT}`)
})