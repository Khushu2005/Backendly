const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    console.log("This is Middleware is between router and api");
    next();
})
router.get('/',(req,res)=>{
    res.send("This is sample.route");
})

module.exports = router;