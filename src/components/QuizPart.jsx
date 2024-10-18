import { Box, Button } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import QuizContext from '../context/ContexApi';
import QuizCard from './QuizCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

function QuizPart() {
  const { questions, setQuestions, qno, setQno } = useContext(QuizContext);
  const [currQ, setCurrQ] = useState(); // Stores current question
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false); // For controlling Next button
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions([]);
    setQno(0);
  }, []);

  useEffect(() => {
    setQno(0);
    setCurrQ(questions[0]);
  }, [questions]);

  const getQuestions = async () => {
    try {
      // Fetching questions from Trivia DB
      const response = await axios.get('https://opentdb.com/api.php', {
        params: {
          amount: 10,
          type: 'multiple',
        },
      });
      if (questions?.length < 1) {
        setQuestions(response?.data.results);
        setCurrQ(response?.data?.results[0]);
        setQno(0);
        const res_data = response.data.results;
        console.log(res_data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (questions?.length < 1) {
      getQuestions();
    }
  }, []);

  const handleNextQuestion = () => {
    setQno((prev) => prev + 1);
  };

  const handleSubmitQuiz = () => {
    navigate('/result');
  };

  useEffect(() => {
    setCurrQ(questions[qno]);
  }, [qno]);

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <Box sx={{ padding: 3 }}>
        {currQ ? (
          <QuizCard
            question={currQ}
            setQno={setQno}
            setNextBtnEnabled={setNextBtnEnabled}
            qno={qno}
          />
        ) : (
          <p><Loading /></p>
        )}
      </Box>
      {currQ && (
        qno === questions?.length - 1 ? (
          <Button
            sx={{
              fontSize: 13,
              fontWeight: 'bold',
              fontFamily: 'Rubik',
              width: { md: 600, xs: '90%' },
              background: '#8AB6F9',
              color: 'blue',
              '&.Mui-disabled': {
                backgroundColor: '#3b3762',
                color: '#CADCFC',
                fontFamily: 'Rubik',
              },
            }}
            onClick={handleSubmitQuiz}
            disabled={!nextBtnEnabled}
          >
            Submit
          </Button>
        ) : (
          <Button
            sx={{
              fontSize: 13,
              fontWeight: 'bold',
              fontFamily: 'Rubik',
              width: { md: 600, xs: '90%' },
              background: '#8AB6F9',
              color: 'blue',
              '&.Mui-disabled': {
                backgroundColor: '#3b3762',
                color: '#CADCFC',
                fontFamily: 'Rubik',
              },
            }}
            onClick={handleNextQuestion}
            disabled={!nextBtnEnabled}
          >
            Next
          </Button>
        )
      )}
    </Box>
  );
}

export default QuizPart;































// // it should be Scrollable


// import { Box, Button } from '@mui/material'
// import React from 'react'
// import { useState } from 'react';
// import { useContext } from 'react';
// import { useEffect } from 'react';
// import QuizContext from '../context/ContexApi';
// import QuizCard from './QuizCard'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Loading from './Loading';

// function QuizPart() {

//     const { questions, setQuestions, qno, setQno } = useContext(QuizContext)
//     const [currQ, setCurrQ] = useState(); // stores Current Question
//     const [nextBtnEnabled, setNextBtnEnabled] = useState(false);// For Controlling Next Button
//     const navigate = useNavigate();
//     useEffect(() => {
//         setQuestions([]);
//         setQno(0);
//     }, []);

//     useEffect(() => {
//         setQno(0);
//         setCurrQ(questions[0]);
//     }, [questions]);

//     const getQuestions = async () => {
//         try {
//             // fetching Questions From Trivia DB
//             const response = await axios.get("https://opentdb.com/api.php", {
//                 params: {
//                     amount: 10,
//                     type: "multiple",
//                 }
//             });
//             if (questions?.length < 1) {
//                 setQuestions(response?.data.results);
//                 currQ(response?.data?.results[0]);
//                 setQno(0);
//                 const res_data = response.data.results();
//                 console.log(res_data);
                
//             }
//         }
//         catch (e) {
//             console.log(e);
//         }
//     }
//     useEffect(() => {
//         if (questions?.length < 1) {
//             getQuestions();
//         }

//     }, []);
//     const handleNextQuestion = () => {
//         setQno((prev) => prev + 1);
//     }
//     const handleSubmitQuiz = () => {
//         navigate("/result");
//     }

//     useEffect(() => {
//         setCurrQ(questions[qno]);
//     }, [qno])

//     return (
//         <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
//             <Box sx={{ padding: 3 }}>
//                 {
//                     currQ ?
//                         <>
//                             <QuizCard question={currQ} setQno={setQno} setNextBtnEnabled={setNextBtnEnabled} qno={qno} />
//                         </>
//                         : <p><Loading /></p>
//                 }
//             </Box>
//             {
//                 currQ ?
//                     qno === questions?.length - 1 ?
//                         <Button sx={{
//                             fontSize: 13, fontWeight: 'bold', fontFamily: "Rubik", width: { md: 600, xs: '90%' }, background: '#8AB6F9', color: 'blue', '&.Mui-disabled': {
//                                 backgroundColor: '#3b3762',
//                                 color: '#CADCFC',
//                                 fontFamily: "Rubik"
//                             },
//                         }} onClick={handleSubmitQuiz} disabled={!nextBtnEnabled} > Submit</Button>

//                         :
//                         <Button sx={{
//                             fontSize: 13, fontWeight: 'bold', fontFamily: "Rubik", width: { md: 600, xs: '90%' }, background: '#8AB6F9', color: 'blue', '&.Mui-disabled': {
//                                 backgroundColor: '#3b3762',
//                                 color: '#CADCFC',
//                                 fontFamily: "Rubik"
//                             },
//                         }} onClick={handleNextQuestion} disabled={!nextBtnEnabled} > Next</Button>

//                     : <></>
//             }
//         </Box>
//     )
// }

// export default QuizPart


