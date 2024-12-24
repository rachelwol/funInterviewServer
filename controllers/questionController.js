import { readQuestions, writeQuestions } from '../services/fileService.js';

export const addQuestion = async (req, res) => {
  const { category } = req.params;
  const newQuestion = req.body;

  const questions = await readQuestions(category);
  questions.questions.push(newQuestion);
  await writeQuestions(category, questions);

  res.status(201).json({ message: 'Question added successfully' });
};

export const getQuestions = async (req, res) => {
  const { category } = req.params;
  const questions = await readQuestions(category);
  res.json(questions);
};