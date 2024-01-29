// QuizForm.js

import React, { useState } from 'react';
import {
  VStack,
  Input,
  Textarea,
  Select,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

function QuizForm() {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [difficulty, setDifficulty] = useState('');
  const [subject, setSubject] = useState('');

  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const handleCorrectAnswerChange = (event) => {
    setCorrectAnswerIndex(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (
      questionText.trim() === '' ||
      options.some((option) => option.trim() === '') ||
      difficulty === '' ||
      subject === ''
    ) {
      alert('Please fill in all fields.');
      return;
    }

    // Submit the question to the database (you can handle this part later with Supabase integration)
    console.log({
      questionText,
      options,
      correctAnswerIndex,
      difficulty,
      subject,
    });

    // Clear form fields after submission
    setQuestionText('');
    setOptions(['', '', '', '']);
    setCorrectAnswerIndex(0);
    setDifficulty('');
    setSubject('');
  };

  return (
    <VStack
      spacing={4}
      border="1px"
      borderColor="blue"
      padding="20px"
      maxW="800px"
    >
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: '600px', paddingTop: '30px' }}
      >
        <FormControl id="questionText">
          <FormLabel>Question Text:</FormLabel>
          <Textarea
            value={questionText}
            onChange={(event) => setQuestionText(event.target.value)}
            required
          />
        </FormControl>

        {options.map((option, index) => (
          <FormControl key={index} id={`option-${index}`}>
            <FormLabel>Option {index + 1}</FormLabel>
            <Input
              value={option}
              onChange={(event) => handleOptionChange(index, event)}
              placeholder={`Option ${index + 1}`}
              required
            />
          </FormControl>
        ))}

        <FormControl id="correctAnswer">
          <FormLabel>Correct Answer</FormLabel>
          <Select
            onChange={handleCorrectAnswerChange}
            value={correctAnswerIndex}
          >
            {options.map((option, index) => (
              <option key={index} value={index}>{`Option ${index + 1}`}</option>
            ))}
          </Select>
        </FormControl>

        <FormControl id="difficulty">
          <FormLabel>Difficulty</FormLabel>
          <Select
            onChange={(event) => setDifficulty(event.target.value)}
            value={difficulty}
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>
        </FormControl>

        <FormControl id="subject">
          <FormLabel>Subject</FormLabel>
          <Input
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
          />
        </FormControl>

        <Button type="submit" colorScheme="blue" style={{ marginTop: '20px' }}>
          Submit Question
        </Button>
      </form>
    </VStack>
  );
}

export default QuizForm;
