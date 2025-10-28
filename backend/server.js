import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import {clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoute.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
const app = express()

await connectCloudinary();

app.use(cors())

app.use(express.json())
app.use(clerkMiddleware())


const PORT = process.env.PORT || 5001

app.get('/', (req,res) => {
    res.send('Server is Live');
})

app.use('/api/ai', aiRouter)
app.use('/api/user', userRouter)


app.use(requireAuth())

app.listen(PORT, () =>{
    console.log('Server is running on Port:',PORT)
})