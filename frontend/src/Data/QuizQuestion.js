import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuizData } from "../API/api";

const QuizQuestion = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuizData()
      .then((data) => {
        console.log("API Response:", data);
        if (data.questions && Array.isArray(data.questions)) {
          setQuizData(data.questions);
        } else {
          console.error("Invalid questions format:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quiz data:", error);
        setLoading(false);
      });
  }, []);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/result", { state: { score, totalQuestions: quizData.length } });
    }
  };

  if (loading) {
    return <div className="app">Loading quiz data...</div>; 
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="quiz-question card">
      <h2>Question {currentQuestionIndex + 1} out of {quizData.length}</h2>
      <h3>{currentQuestion.description}</h3>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index} onClick={() => handleAnswerClick(option.is_correct)}>
            {option.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestion;
