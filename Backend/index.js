const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRouter = require('./Routes/AllRoutes')

const app = express()
dotenv.config()
const PORT = 1234
mongoose.connect(process.env.LINK, {


}).then(() => {
    app.listen(PORT, () => {
        console.log(`server started on ${PORT}`);
        // User.insertMany(users)
        // Post.insertMany(posts)
    })
}).catch((err) => {
    console.log(`${err} oppps error occured`);
})
app.use(express.json())
app.use('/app', userRouter)