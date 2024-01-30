// QuizForm.js

import React, { useState } from 'react';
import { Alert, AlertIcon } from '@chakra-ui/react';

function QuizForm() {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
  const [difficulty, setDifficulty] = useState('');
  const [subject, setSubject] = useState('');
  const [quizAdded, setQuizAdded] = useState(false);

  // for the succesfull alert
  const handleQuizAdded = () => {
    setQuizAdded(true);
    setTimeout(() => {
      setQuizAdded(false);
    }, 5000);
  };

  // for the options
  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  // for the correct answer
  const handleCorrectAnswerChange = (event) => {
    setCorrectAnswerIndex(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form Validation
    if (
      questionText.trim() === '' ||
      options.some((option) => option.trim() === '') ||
      difficulty === '' ||
      subject === ''
    ) {
      alert('Please fill in all fields.');
      return;
    }

    console.log({
      questionText,
      options,
      correctAnswerIndex,
      difficulty,
      subject,
    });

    // calling alert function
    handleQuizAdded();

    // this is for clearing the inputs after submission
    setQuestionText('');
    setOptions(['', '', '', '']);
    setCorrectAnswerIndex(-1);
    setDifficulty('');
    setSubject('');
  };

  return (
    <div className="form-control">
      <h1>Add Your Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="questionText">Question Text:</label>
          <textarea
            id="questionText"
            value={questionText}
            onChange={(event) => setQuestionText(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Options:</label>
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              value={option}
              onChange={(event) => handleOptionChange(index, event)}
              required
            />
          ))}
        </div>
        <div className="form-group">
          <label htmlFor="correctAnswer"> Select Correct Answer:</label>
          <select
            id="correctAnswer"
            onChange={handleCorrectAnswerChange}
            value={correctAnswerIndex === -1 ? '' : correctAnswerIndex}
          >
            <option value=""> </option>

            {options.map((option, index) => (
              <option key={index} value={index}>{`Option ${index + 1}`}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="difficulty"> Select Difficulty:</label>
          <select
            id="difficulty"
            onChange={(event) => setDifficulty(event.target.value)}
            value={difficulty}
          >
            <option value=""></option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
          />
        </div>
        <div className="btn">
          <button type="submit">Submit Question</button>
        </div>
      </form>
      {quizAdded && (
        <Alert status="success" marginTop="10px">
          <AlertIcon />
          Quiz added successfully!
        </Alert>
      )}
    </div>
  );
}

export default QuizForm;
