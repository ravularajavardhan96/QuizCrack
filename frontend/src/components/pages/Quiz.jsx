import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import Question from "./Question";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Result from "./Result";

export default function Quiz() {
  let [info, setInfo] = useState([]);
  let [current, setCurrent] = useState(0);
  let [score, setScore] = useState(0);
  useEffect(() => {
    async function getInfo() {
      let res = await axios.get("http://localhost:3000/ques");
      setInfo(res.data);
    }
    getInfo();
  },[]);
  function handleNext() {
    setCurrent((pre) => pre + 1);
  }
  function handlePrev() {
    setCurrent((pre) => pre - 1);
  }
  function handleScore() {
    setScore(prev=> prev + 1);
  }

  return (
    <div>
      {current < info.length ? (
        <>
          <Question que={info[current]} onCorrect={handleScore} nextBtn={handleNext} />
        </>
      ) : (
        <Result score={score} total={info.length}/>
        // <h2 className="complete">The quiz completed</h2>
      )}
      <div className="btnsGrp">
        {current > 0 && current<info.length && (
          <Button
            variant="outlined"
            onClick={handlePrev}
            startIcon={<ArrowBackIcon />}
          >
            prev
          </Button>
        )}
        {current < info.length && (
          <Button
            variant="outlined"
            onClick={handleNext}
            startIcon={<ArrowForwardIcon />}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
