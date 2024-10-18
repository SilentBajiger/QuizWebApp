import React, { useContext, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import ResultComponent from '../components/ResultComponent';
import QuizContext from '../context/ContexApi';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const {answer,totalMarks} = useContext(QuizContext)
  const [noOfCorrect,setNoOfCorrect] = useState(0);
  const [noOfAttempted,setNoOfAttempted] = useState(0);
  const [percentage,setPercentage] = useState(0);
  const navigate = useNavigate();
  useEffect(()=>{
    console.log("Answers: ")
    console.log(answer);
    if(answer && noOfAttempted === 0){
      let correct_count = 0,attempted_count = 0 , total_marks = 0;
      answer?.forEach(element => {
          total_marks += element.marksGot;
          if(element.status) correct_count++;
          if(element.attempted) attempted_count++;
          
      });
      console.log("TOTAL MARKS: ",totalMarks);
      setNoOfCorrect(correct_count);
      setNoOfAttempted(attempted_count);
      let per = ((totalMarks / 20 ) * 100 ).toFixed(2);
      setPercentage(per);
    }
  },[answer])


  return (
    <Box sx={{display:'flex',background:'#0a003b',justifyContent:'center',paddingBottom:{xs:7},flexDirection:'column',alignItems:'center'}}>
      <ResultComponent percentage={percentage} totalMarks={totalMarks} noOfCorrect={noOfCorrect} noOfAttempted={noOfAttempted} />
      <Button sx={{fontFamily:"Rubik",width:{md:300,xs:"90%"},background:'#03a9f4',color:'#1a237e',boxShadow:'2px 2px 2px blue'}} onClick={()=>navigate("/")}> Start Again </Button>
    </Box>
  );
};

export default Result;
