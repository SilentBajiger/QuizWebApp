
import React, { useContext, useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Button,
  Grid,
  Box,
} from '@mui/material';
import QuizContext from '../context/ContexApi';
import { useNavigate } from 'react-router-dom';

const temp = {
  optD: '',
  text: '#CADCFC',
  selectD: '#CADCFC',
  selectText: '#162be9',
};

const QuizCard = ({ question, qno, setNextBtnEnabled, setQno }) => {
  const { setAnswer, questions, setTotalMarks } = useContext(QuizContext);
  const [running, setRunning] = useState(false);
  const [timer, settimer] = useState(null);
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [marks, setMarks] = useState((2).toFixed(2));
  const [selected, setSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);

  const navigate = useNavigate();

  const reset = () => {
    setCount(0);
    setProgress(0);
    setRunning(false);
    settimer(null);
    setMarks(2);
    setNextBtnEnabled(false);
    setSelected(false);
    setOptions([]);
  };

  const goToNextQuestion = () => {
    setQno((prev) => prev + 1);
    setNextBtnEnabled(false);
  };

  const stopInterval = () => {
    clearInterval(timer);
  };

  const generateOptions = () => {
    let opt = [question.correct_answer, ...question.incorrect_answers];
    
    for (let i = opt.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opt[i], opt[j]] = [opt[j], opt[i]];
    }
    setOptions(opt);
  };

  const goWithoutSelect = () => {
    setAnswer((prev) => [
      ...prev,
      { timeTake: 30, marksGot: 0, attempted: false, status: false, qid: qno },
    ]);
  };

  const handleOptionSelect = (e) => {
    if (selected) return;
    setSelected(true);
    setSelectedOption(e);
    setNextBtnEnabled(true);
    stopInterval();

    setAnswer((prev) => [
      ...prev,
      {
        timeTake: count,
        marksGot: question.correct_answer === e ? marks : 0,
        status: question.correct_answer === e,
        attempted: true,
        qid: qno,
      },
    ]);

    setTotalMarks((prev) =>
      question.correct_answer === e ? Number(prev) + Number(marks) : prev
    );
  };

  useEffect(() => {
    let tid;
    reset();
    generateOptions();
    if (!running && !timer) {
      tid = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 250);
      settimer(tid);
      setRunning(true);
    }
    return () => {
      clearInterval(tid);
    };
  }, [qno, question]);

  useEffect(() => {
    const num = (count * 100) / 120;
    if (count > 40 && count % 4 === 0) {
      setMarks((prev) => {
        const num = prev - 0.1;
        return num.toFixed(2);
      });
    }
    if (count === 120 || marks === 0) {
      stopInterval();
      goWithoutSelect();
      if (qno === questions.length - 1) {
        navigate('/result');
      } else {
        goToNextQuestion();
      }
    }
    setProgress(num);
  }, [count]);

  return (
    <Card
      sx={{
        maxWidth: 600,
        minWidth: { md: 600 },
        margin: 'auto',
        padding: 2,
        background: '#0a003b',
        border: '1px solid #8AB6F9',
      }}
    >
      <CardContent
        sx={{
          height: { md: '70vh' },
          maxHeight: { md: '80vh', xs: '75vh' },
          overflowY: 'auto',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#8AB6F9' }}>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Rubik',fontSize:{xs:16,md:20} }}>
            Question {Number(qno) + 1} of {10}
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Rubik',fontSize:{xs:16,md:20} }} color="#8AB6F9" >
            Marks: {marks}
          </Typography>
        </Box>

        <Typography variant="body1" color="#8AB6F9" sx={{ fontFamily: 'Rubik' }} gutterBottom>
          {question?.question}
        </Typography>

        <LinearProgress variant="determinate" value={progress} sx={{ marginY: 2, transition: 'width 0.5s ease-in-out' }} />

        <Grid container spacing={2}>
          {options?.map((option, index) => (
            <Grid item xs={12} key={index}>
              <Button
                variant="outlined"
                sx={{
                  fontFamily: 'Rubik',
                  background: selectedOption === option ? temp.selectD : temp.optD,
                  color: selectedOption === option ? temp.selectText : temp.text,
                }}
                fullWidth
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </Button>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default QuizCard;











































































// import React, { useContext, useEffect, useRef, useState } from 'react';
// import {
//   Card,
//   CardContent,
//   Typography,
//   LinearProgress,
//   Button,
//   Grid,
//   Box,
// } from '@mui/material';
// import QuizContext from '../context/ContexApi';
// import { useNavigate } from 'react-router-dom';



// const temp = {
//   optD: '',
//   text: '#CADCFC',
//   selectD: '#CADCFC',
//   selectText: '#162be9'
// }

// const QuizCard = ({ question, qno, setNextBtnEnabled, setQno }) => {
//   const {setAnswer, questions, setTotalMarks } = useContext(QuizContext)
//   const [running, setRunning] = useState(false);
//   const [timer, settimer] = useState(null);
//   const [count, setCount] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [marks, setMarks] = useState((2).toFixed(2));
//   const [selected, setSelected] = useState(false);
//   const [selectedOption,setSelectedOption] = useState(null);
//   const [options,setOptions] = useState([]);

//   const navigate = useNavigate();
//   const reset = () => {
//     setCount(0);
//     setProgress(0);
//     setRunning(false);
//     settimer(null);
//     setMarks(2);
//     setNextBtnEnabled(false);
//     setSelected(false);
//     setOptions([]);
//   }
//   const goToNextQuestion = () => {
//     setQno((prev) => prev + 1)
//     setNextBtnEnabled(false);
//   }

//   const stopInterval = () => {
//     clearInterval(timer);
//   }

//   const generateOptions = () =>{
//     let opt = [question.correct_answer,...question.incorrect_answers];
//     let newopt = [];
//     console.log("correct one",opt[0]);

//     for (let i = opt.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
//       [opt[i], opt[j]] = [opt[j], opt[i]]; // Swap elements
//     }
//     setOptions(opt);
//   }


//   const goWithoutSelect = () => {
//     setAnswer((prev) => {
//       return [...prev, { timeTake: 30, marksGot: 0, attempted: false, status: false, qid: qno }];
//     })
//   }


//   const handleOptionSelect = (e) => {
//     if (selected) return;
//     setSelected(true);

//     setSelectedOption(e);

//     if(question.correct_answer === e)console.log("Correct")
//       else console.log("Wrong")

//     setNextBtnEnabled(true);
//     stopInterval();
//     setAnswer((prev) => {
//       return [...prev, {
//         timeTake: count,
//         marksGot: question.correct_answer === e ? marks : 0,
//         status: question.correct_answer === e,
//         attempted: true, qid: qno
//       }];
//     })
//     setTotalMarks((prev) => {
//       if (question.correct_answer === e) {
//         const res = Number(prev) + Number(marks);
//         return res;
//       }
//       return prev;
//     }
//     );
//   }

//   useEffect(() => {
//     let tid;
//     reset();
//     generateOptions();
//     if (!running && !timer) {
//       tid = setInterval(() => {
//         setCount((prev) => prev + 1);
//       }, 250);
//       settimer(tid);
//       setRunning(true);
//     }
//     return () => {
//       clearInterval(tid);
//     }
//   }, [qno, question]);

//   useEffect(() => {
//     const num = (count * 100) / 120;
//     if (count > 40 && count % 4 === 0) {
//       setMarks((prev) => {
//         // ((prev - 0.1)*100)
//         const num = prev - 0.1;
//         return num.toFixed(2);
//       });
//     }
//     if (count === 120 || marks === 0) {
//       stopInterval()
//       goWithoutSelect();
//       if (qno === questions.length - 1) {
//         navigate("/result")
//       }
//       else {

//         goToNextQuestion();
//       }

//     }
//     setProgress(num);
//   }, [count])


//   return (
//     <Card sx={{ maxWidth: 600, minWidth: { md: 600 }, margin: 'auto', padding: 2, background: '#0a003b', border: '1px solid #8AB6F9' }}>
//       <CardContent sx={{ height: { md: '70vh' }, maxHeight: { md: '80vh', xs: '75vh' }, overflowY: 'auto' }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#8AB6F9' }}>
//           <Typography variant="h6" gutterBottom sx={{fontFamily:"Rubik"}}>
//             Question {Number(qno)+1} of {10}
//           </Typography>
//           <Typography variant="body2" fontSize={20} sx={{fontFamily:"Rubik"}} color="#8AB6F9" gutterBottom>
//             Marks: {marks}
//           </Typography>
//         </Box>

//         <Typography variant="body1" color={'#8AB6F9'} sx={{fontFamily:"Rubik"}} gutterBottom>
//           {question?.question}
//         </Typography>

//         <LinearProgress variant="determinate" value={progress} sx={{ marginY: 2, transition: 'width 0.5s ease-in-out' }} />
//         <Grid container spacing={2}>
//           <Grid item xs={12} >
//             <Button variant="outlined" sx={{ fontFamily:"Rubik",background: selectedOption===options[0]?temp.selectD:temp.optD,
//               color:selectedOption===options[0]?temp.selectText:temp.text
//                }} 
//                fullWidth onClick={() => handleOptionSelect(options[0])}>
//               {options[0]}
//             </Button>
//           </Grid>
//           <Grid item xs={12} >
//             <Button variant="outlined" sx={{fontFamily:"Rubik", 
//               background: selectedOption===options[1]?temp.selectD:temp.optD,
//                color:selectedOption===options[1]?temp.selectText:temp.text }} fullWidth onClick={() => handleOptionSelect(options[1])}>
//               {options[1]}
//             </Button>
//           </Grid>
//           <Grid item xs={12}>
//             <Button variant="outlined" sx={{ fontFamily:"Rubik",
//             background: selectedOption===options[2]?temp.selectD:temp.optD,
//              color:selectedOption===options[2]?temp.selectText:temp.text }} fullWidth
//              onClick={() => handleOptionSelect(options[2])}
//              >
//               {options[2]}
//             </Button>
//           </Grid>
//           <Grid item xs={12} >
//             <Button variant="outlined" sx={{fontFamily:"Rubik",
//                background: selectedOption===options[3]?temp.selectD:temp.optD, 
//                color:selectedOption===options[3]?temp.selectText:temp.text }} fullWidth onClick={() => handleOptionSelect(options[3])}>
//               {options[3]}
//             </Button>
//           </Grid>

//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// export default QuizCard;






































// <Card sx={{ maxWidth: 600, minWidth: { md: 600 }, margin: 'auto', padding: 2, background: '#0a003b', border: '1px solid #8AB6F9' }}>
// <CardContent sx={{ height: { md: '70vh' }, maxHeight: { md: '80vh', xs: '75vh' }, overflowY: 'auto' }}>
//   <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#8AB6F9' }}>
//     <Typography variant="h6" gutterBottom sx={{fontFamily:"Rubik"}}>
//       Question {Number(qno)+1} of {10}
//     </Typography>
//     <Typography variant="body2" fontSize={20} sx={{fontFamily:"Rubik"}} color="#8AB6F9" gutterBottom>
//       Marks: {marks}
//     </Typography>
//   </Box>

//   <Typography variant="body1" color={'#8AB6F9'} sx={{fontFamily:"Rubik"}} gutterBottom>
//     {question?.question}
//   </Typography>

//   <LinearProgress variant="determinate" value={progress} sx={{ marginY: 2, transition: 'width 0.5s ease-in-out' }} />
//   <Grid container spacing={2}>
//     <Grid item xs={12} >
//       <Button variant="outlined" sx={{ fontFamily:"Rubik",background: selectedOption===question?.correct_answer?temp.selectD:temp.optD,
//         color:selectedOption===question?.correct_answer?temp.selectText:temp.text
//          }} 
//          fullWidth onClick={() => handleOptionSelect(question?.correct_answer)}>
//         {question?.correct_answer}
//       </Button>
//     </Grid>
//     <Grid item xs={12} >
//       <Button variant="outlined" sx={{fontFamily:"Rubik", 
//         background: selectedOption===question?.incorrect_answers[0]?temp.selectD:temp.optD,
//          color:selectedOption===question?.incorrect_answers[0]?temp.selectText:temp.text }} fullWidth onClick={() => handleOptionSelect(question?.incorrect_answers[0])}>
//         {question?.incorrect_answers[0]}
//       </Button>
//     </Grid>
//     <Grid item xs={12}>
//       <Button variant="outlined" sx={{ fontFamily:"Rubik",
//       background: selectedOption===question?.incorrect_answers[1]?temp.selectD:temp.optD,
//        color:selectedOption===question?.incorrect_answers[1]?temp.selectText:temp.text }} fullWidth
//        onClick={() => handleOptionSelect(question?.incorrect_answers[1])}
//        >
//         {question?.incorrect_answers[1]}
//       </Button>
//     </Grid>
//     <Grid item xs={12} >
//       <Button variant="outlined" sx={{fontFamily:"Rubik",
//          background: selectedOption===question?.incorrect_answers[2]?temp.selectD:temp.optD, 
//          color:selectedOption===question?.incorrect_answers[2]?temp.selectText:temp.text }} fullWidth onClick={() => handleOptionSelect(question?.incorrect_answers[2])}>
//         {question?.incorrect_answers[2]}
//       </Button>
//     </Grid>

//   </Grid>
// </CardContent>
// </Card>