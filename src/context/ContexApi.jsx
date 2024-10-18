import React, { createContext, useState, useContext } from 'react';

// Create the context
const QuizContext = createContext();

// Create a provider component
export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [answer,setAnswer] = useState([]);
  const [qno, setQno] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0);


  return (
    <QuizContext.Provider value={{questions,totalMarks,setTotalMarks,setQuestions,qno,setQno,answer,setAnswer}}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext
