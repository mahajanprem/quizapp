import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Which of the following is the correct name of React.js?",
      options: [
        { id: 0, text: "React", isCorrect: false },
        { id: 1, text: "React.js", isCorrect: false },
        { id: 2, text: "ReactJS", isCorrect: false },
        { id: 3, text: "All of the above", isCorrect: true },
      ],
    },
    {
      text: "Which of the following acts as the input of a class-based component?",
      options: [
        { id: 0, text: "class", isCorrect: false },
        { id: 1, text: "props", isCorrect: true },
        { id: 2, text: "Factory", isCorrect: false },
        { id: 3, text: "None of the mentioned", isCorrect: false },
      ],
    },
    {
      text: "React.js is written in which of the following language?",
      options: [
        { id: 0, text: "C", isCorrect: false },
        { id: 1, text: "C++", isCorrect: false },
        { id: 2, text: "Java Script", isCorrect: true },
        { id: 3, text: "Java", isCorrect: false },
      ],
    },
    {
      text: "What of the following is used in React.js to increase performance?",
      options: [
        { id: 0, text: "Original Dom", isCorrect: false },
        { id: 1, text: "Virtual Dom", isCorrect: true },
        { id: 2, text: "Both", isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Which of the following keyword is used to create a class inheritance?",
      options: [
        { id: 0, text: "Create", isCorrect: false },
        { id: 1, text: "Inherits", isCorrect: false },
        { id: 2, text: "Extends", isCorrect: true },
        { id: 3, text: "This", isCorrect: false },
      ],
    },
    {
			text: 'What is the default port where webpack-server runs?',
			options: [
				{id: 0, text: '3000', isCorrect: true },
				{id: 1, text: '8080', isCorrect: false },
				{id: 2, text: '3030', isCorrect: false },
				{id: 3, text: '6060', isCorrect: false },
			],
		},
    {
			text: 'How many numbers of elements a valid react component can return?',
			options: [
				{id: 0, text: '1', isCorrect: true },
				{id: 1, text: '2', isCorrect: false },
				{id: 2, text: '4', isCorrect: false },
				{id: 3, text: '3', isCorrect: false },
			],
		},
    {
			text: 'How many ways of defining your variables in ES6?',
			options: [
				{id: 0, text: '1', isCorrect: false },
				{id: 1, text: '3', isCorrect: true },
				{id: 2, text: '4', isCorrect: false },
				{id: 3, text: '5', isCorrect: false },
			],
		},
    {
			text: 'What are the two ways to handle data in React?',
			options: [
				{id: 0, text: 'State & Props', isCorrect: true },
				{id: 1, text: 'Services & Component', isCorrect: false },
				{ id: 2,text: 'State & Services', isCorrect: false },
				{id: 3, text: 'State & Component', isCorrect: false },
			],
		},
    {
			text: ' Does React.js create a VIRTUAL DOM in the memory?',
			options: [
				{id: 0, text: 'True', isCorrect: false },
				{id: 1, text: 'FALSE', isCorrect: false },
				{id: 2, text: 'Can be True or False', isCorrect: false },
				{id: 3, text: 'Cannot say', isCorrect: true },
			],
		},
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>React Quiz App</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
