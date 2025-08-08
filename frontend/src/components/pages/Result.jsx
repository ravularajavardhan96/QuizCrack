import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import LeaderBoard from "./LeaderBoard";
import axios from 'axios'
export default function Result({score,total}){

    useEffect(()=>{
        async function storeScore(){
            axios.post('http://localhost:3000/score',{
                score
            });
        }
        storeScore();
    },[score])

    return(

        <div style={{textAlign:'center', height:'70vh',flexDirection:'column'}} className="d-flex align-items-center justify-content-center ">
        <h1>Quiz completed 🧠</h1><br></br>
        <h1>Your score is&nbsp;:&nbsp;{score}🎯/&nbsp;{total}</h1>
        {/* <LeaderBoard score={score}/> */}
        </div>
       
    )
}