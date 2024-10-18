import React, { useContext, useEffect } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import QuizContext from '../context/ContexApi';

const Home = () => {
  // Home Page
  const navigate = useNavigate();
  const { setAnswer, setTotalMarks, setQuestions } = useContext(QuizContext)

  useEffect(() => {
    setAnswer([]);
    setTotalMarks(0);
    setQuestions([]);
  }, [])

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        minHeight: '80vh',
        textAlign: 'center',

      }}
    >
      <Box
        component="img"
        src={'images/answer.png'}
        alt="Logo"
        sx={{
          width: {xs:'200px',md:'285px'},
          height: 'auto',
          mb: 2,
        }}
      />
      <Typography variant="h4" sx={{ color: 'white', fontFamily: "Rubik", fontSize: 50, textShadow: '2px 2px 4px #117fee', marginTop: -10 }} gutterBottom>
        Welcome to Quizzer
      </Typography>
      <Button
        variant="contained"

        sx={{
          fontFamily: "Rubik",
          width: { md: 300, xs: "90%" }, background: '#03a9f4', color: '#1a237e',
          boxShadow: '2px 2px 2px blue',
          '&:hover': {
            backgroundColor: '#3949ab',
            boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.6)',
          },
        }}
        onClick={() => navigate("/quiz")} // navigate to Quiz Page
      >
        Let's Begin!
      </Button>
    </Container>
  );
};

export default Home;
