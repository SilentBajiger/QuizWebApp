// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { QuizProvider } from "./context/ContexApi";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Result from "./pages/Result";

function App() {
  return (
    <div style={{background:'#0a003b',height:'100vh'}}>
      <QuizProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Main />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </QuizProvider>


    </div>
  );
}

export default App;
