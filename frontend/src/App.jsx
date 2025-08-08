import { useState,useEffect } from 'react'
// import './App.css'
import axios from 'axios';
import Home from './components/pages/Home'
import Quiz from './components/pages/Quiz';
import Result from './components/pages/Result';
import LeaderBoard from './components/pages/LeaderBoard';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ResponsiveAppBar from './components/ResponsiveAppBar';
// import Question from '../../backend/models/Question';
import Question from './components/pages/Question';


function App() {
 

  return (
   <>
   <BrowserRouter>
   {/* <Question/> */}
   {/* <Navbar/> */}
   <ResponsiveAppBar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path = "/start" element={<Quiz/>}/>
    <Route path='/leader' element={<LeaderBoard/>}/>
    <Route path='/result' element={<Result/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App;
