import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';

export default function Quiz(){
    let[info,setInfo] = useState([]);
    let random = Math.floor(Math.random()*30)+1;
    let [current,setCurrent] = useState(random);
   
    useEffect( ()=>{
      async function fetchInfo(){
        let res = await axios.get('http://localhost:3000/ques');
        setInfo(res.data);
     
      }
      fetchInfo();

    },[])
    function handleNext(){
       let ran = Math.floor(Math.random()*info.length);
          setCurrent(ran);
          console.log(info.slice(0,ran));
          setInfo((info)=>info.slice(0,ran).concat(info.slice(ran+1)));
          console.log(info)
          console.log(ran);
       
        
          
    }
    return(
    //   <div>
    //     {info.length ===0?(<p>Loading...</p>):(
    //         info.map((ele,idx)=>(
    //             <div key={ele._id}>
    //             <h2>{idx+1}.{ele.question}</h2>
    //             <ul>
    //                {ele.options.map((op,i)=>(
    //                 <li key={i}>{op}</li>
    //                ))}
    //             </ul>
    //             <h2><strong>{ele.correctAnswer}</strong></h2>
    //             <hr></hr>
    //             </div>  
    //         )
                
    //         )
    //     )}
    //   </div>
    <div>
       {info.length===0?(<h1>Loading...</h1>):current<40?(
            <div>
                <h2>{info[current].question}</h2>
                <ul>
                    {info[current].options.map((opt,i)=>(
                        <li key={i} style={{textDecoration:'none',listStyle:'none'}}>{opt}</li>
                    ))}
                </ul>
                <h1><strong>{info[current].correctAnswer}</strong></h1>
            </div>
        ):(<h1>Quiz completed</h1>)}
        <button onClick={handleNext}>Next</button>
    </div>
    )
}

// export default Home;