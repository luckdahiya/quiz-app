import React from "react";
import { useNavigate } from "react-router-dom";

const QuizStart = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="quiz-start card">
      <h1>Welcome to the Quiz!</h1>
      <button className="button" onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default QuizStart;
