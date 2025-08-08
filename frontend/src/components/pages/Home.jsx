import React from "react";
import Navbar from "../Navbar";
import './Home.css'
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

export default function Home(){
    return(
       <div className=" d-flex align-items-center justify-content-center title flex-column ">
             <h1  className="mb-4">Sharpen your mind with every click &nbsp;</h1>
            {/* <Button
            // variant="outlined"
            // onClick={handleNext}
            startIcon={<ArrowForwardIcon  />}
            className="larger"
          >
        
          </Button> */}
          <Button className='mt-3 p-3' variant="contained"><Link to={"/start"} style={{textDecoration:'none',color:'white'}}>Start taking quiz &nbsp;&nbsp;<ArrowForwardIcon/></Link></Button>
            
       </div>
       
        
    )
}