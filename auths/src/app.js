const express = require('express')
const router = require('./routes/user.routes')

const app = express();
app.use(express.json())
app.use('/auth',router)

module.exports = app;