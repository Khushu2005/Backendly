const express = require('express');
const router = require('./router/sample.route');
const app = express();
app.use((req,res,next)=>{
    console.log("This is Middleware is between app and router");
    next();
})
app.use('/',router);


module.exports = app;