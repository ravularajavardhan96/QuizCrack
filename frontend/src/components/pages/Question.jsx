import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import '../Navbar.css';
import Result from './Result';

export default function Question({que,onCorrect,nextBtn}) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
   const [answered, setAnswered] = React.useState(false);
  // const [count,setCount] = React.useState(0);
  // const [helperText, setHelperText] = React.useState('Choose wisely');
   React.useEffect(()=>{
    setAnswered(false);
   },[que])
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    // setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!answered && value === que.correctAnswer) {
      onCorrect();    
      console.log("Answer correct");
    } 
    setAnswered(true);
    nextBtn();
   };

  return (
    <form onSubmit={handleSubmit}>
      {/* <h2>Score:{count}</h2> */}
      <FormControl sx={{ m: 3,gap:2 }} error={error} variant="standard">

        <FormLabel id="demo-error-radios" style={{backgroundColor:'',fontWeight:'bolder',fontSize:'2rem'}}>{que.question}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
          style={{paddingLeft:'30%'}}
        >
          <FormControlLabel value={que.options[0]} control={<Radio />} label={que.options[0]} />
          <FormControlLabel value={que.options[1]} control={<Radio />} label={que.options[1]} />
          <FormControlLabel value={que.options[2]} control={<Radio />} label={que.options[2]} />
          <FormControlLabel value={que.options[3]} control={<Radio />}label={que.options[3]} />
        </RadioGroup>
        {/* <FormHelperText>{helperText}</FormHelperText> */}
        {/* <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button> */}
         <Button sx={{ mt: 1, mr: 1 }} type="submit"  variant="outlined">
                Submit Answer
            </Button>
      </FormControl>
     
    </form>
  );
}
