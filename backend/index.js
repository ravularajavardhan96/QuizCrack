const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const Question = require('./models/Question');
const quizRoutes = require('./routes/quizRoutes');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT,()=>{
    console.log(`The server running on port ${PORT}`);
})
mongoose.connect('mongodb://127.0.0.1:27017/quiz')
.then(()=>{
    console.log("Database connected successfully");
})
.catch((err)=>{console.log("error"+err)});

app.get("/",(req,res)=>{
    res.json({message:"This is root"});
})

app.post("/new",async (req,res)=>{
    const ques = await new Question(req.body);
    await ques.save();
    res.send(ques);
})

app.get("/ques",async(req,res)=>{
  const ques = await Question.find({});
  res.send(ques);
})

app.use("/quiz",quizRoutes);

// const sampleData = [
//   {
//     question: "What is the capital of France?",
//     options: ["Paris", "Rome", "Berlin", "Madrid"],
//     correctAnswer: "Paris"
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: ["Earth", "Mars", "Jupiter", "Venus"],
//     correctAnswer: "Mars"
//   },
//   {
//     question: "Who wrote 'Hamlet'?",
//     options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
//     correctAnswer: "William Shakespeare"
//   },
//   {
//     question: "What is the chemical symbol for water?",
//     options: ["H2O", "O2", "CO2", "NaCl"],
//     correctAnswer: "H2O"
//   },
//   {
//     question: "Which is the largest mammal?",
//     options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
//     correctAnswer: "Blue Whale"
//   },
//   {
//     question: "In which country is the Great Pyramid of Giza?",
//     options: ["India", "Mexico", "Egypt", "China"],
//     correctAnswer: "Egypt"
//   },
//   {
//     question: "What is the square root of 64?",
//     options: ["6", "7", "8", "9"],
//     correctAnswer: "8"
//   },
//   {
//     question: "How many continents are there?",
//     options: ["5", "6", "7", "8"],
//     correctAnswer: "7"
//   },
//   {
//     question: "Which gas do plants absorb from the atmosphere?",
//     options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
//     correctAnswer: "Carbon Dioxide"
//   },
//   {
//     question: "What is the capital of India?",
//     options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
//     correctAnswer: "Delhi"
//   },
//   {
//     question: "Which is the smallest prime number?",
//     options: ["0", "1", "2", "3"],
//     correctAnswer: "2"
//   },
//   {
//     question: "Who is known as the father of computers?",
//     options: ["Alan Turing", "Charles Babbage", "Steve Jobs", "Bill Gates"],
//     correctAnswer: "Charles Babbage"
//   },
//   {
//     question: "Which organ purifies blood in the human body?",
//     options: ["Heart", "Kidney", "Lungs", "Liver"],
//     correctAnswer: "Kidney"
//   },
//   {
//     question: "Which festival is known as the festival of lights?",
//     options: ["Holi", "Diwali", "Eid", "Christmas"],
//     correctAnswer: "Diwali"
//   },
//   {
//     question: "Which part of the plant conducts photosynthesis?",
//     options: ["Roots", "Stem", "Leaves", "Flowers"],
//     correctAnswer: "Leaves"
//   },
//   {
//     question: "Which animal is known as the king of the jungle?",
//     options: ["Tiger", "Elephant", "Lion", "Cheetah"],
//     correctAnswer: "Lion"
//   },
//   {
//     question: "What is the freezing point of water?",
//     options: ["0°C", "10°C", "32°C", "100°C"],
//     correctAnswer: "0°C"
//   },
//   {
//     question: "How many sides does a triangle have?",
//     options: ["2", "3", "4", "5"],
//     correctAnswer: "3"
//   },
//   {
//     question: "What is the main source of energy for Earth?",
//     options: ["Wind", "Coal", "Sun", "Water"],
//     correctAnswer: "Sun"
//   },
//   {
//     question: "What is the national bird of India?",
//     options: ["Sparrow", "Peacock", "Parrot", "Crow"],
//     correctAnswer: "Peacock"
//   }
// ];

// async function insertSampleData(sampleData){
//   await Question.insertMany(sampleData);
// }
// insertSampleData(sampleData);



