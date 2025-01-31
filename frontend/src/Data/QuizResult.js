import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const QuizResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state;

  const handleRestartQuiz = () => {
    navigate("/");
  };

  return (
    <div className="quiz-summary card">
      <h1>Quiz Completed!</h1>
      <p>You scored {score} out of {totalQuestions}.</p>
      <button className="button" onClick={handleRestartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default QuizResult;
