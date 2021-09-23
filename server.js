const express=require('express')
const connectDB=require('./config/db')
const errorHandler=require('./middleware/error')
const cors = require('cors')
require('dotenv').config({path:"./config.env"})
//Connecting to MongoDB
connectDB()

const app=express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Authorization
app.use('/api/auth',require('./routers/auth'))
app.use(express.urlencoded({extended:true}))
//Private Pages
app.use('/api/private',require('./routers/private'))
app.use('/api/traffic',require('./routers/traffic'))
app.use(errorHandler)
const PORT=process.env.PORT || 5000

const server=app.listen(PORT,()=>console.log(`SERVER RUNNING ON ${PORT}`))

process.on("unhandledRejection",(err,promise)=>{
    console.log(`Logged error: ${err}`)
})