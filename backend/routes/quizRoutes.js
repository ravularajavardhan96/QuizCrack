const express = require('express');
const router = express.Router();
const Question = require('../models/Question');



router.get("/quiz",(req,res)=>{
    res.send("The quiz got started");
})

module.exports = router;