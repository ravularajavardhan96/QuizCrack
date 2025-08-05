import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Home from './components/pages/Home'
import Quiz from './components/pages/Quiz';
import Result from './components/pages/Result';
import LeaderBoard from './components/pages/LeaderBoard';


function App() {
 

  return (
   <>
   <Quiz/>
   <Home/>
   <LeaderBoard/>
   <Result/>
   </>
  )
}

export default App;
