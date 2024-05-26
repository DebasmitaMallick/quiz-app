import quizLogo from "../assets/quiz-logo.png";
import React from 'react'

export const Header = () => {
  return (
    <header>
        <img src={quizLogo} alt="quiz logo" />
        <h1>ReactQuiz</h1>
    </header>
  )
}
