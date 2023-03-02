const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const { fileURLToPath } = require('url')
const userRouter = require('./Routes/AllRoutes')

const app = express()
dotenv.config()
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
app.use(cors({ origin: 'http://localhost:1234', credentials: true }))
app.use(cookieParser())
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