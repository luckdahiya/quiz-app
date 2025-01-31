import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizStart from "./Data/QuizStart";
import QuizQuestion from "./Data/QuizQuestion";
import QuizResult from "./Data/QuizResult";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<QuizStart />} />
          <Route path="/quiz" element={<QuizQuestion />} />
          <Route path="/result" element={<QuizResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
