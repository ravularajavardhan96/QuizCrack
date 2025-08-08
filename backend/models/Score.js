const mongoose = require('mongoose');

const scoreSchema =new  mongoose.Schema({
    user:String,
    score:Number,
    createdAt:{
        type:Date,
        default:Date.now,
    }
})


const Score = new mongoose.model('Score',scoreSchema);

module.exports = Score;