const express = require('express')
const router = require('./routes/user.routes')
const cookieParser = require('cookie-parser')   

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use('/auth',router)


module.exports = app;