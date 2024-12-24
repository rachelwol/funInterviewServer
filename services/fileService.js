import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const QUESTIONS_DIR = path.join(__dirname, '../data');

export const readQuestions = async (category) => {
  const filePath = path.join(QUESTIONS_DIR, `${category}-questions.json`);
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
};

export const writeQuestions = async (category, questions) => {
  const filePath = path.join(QUESTIONS_DIR, `${category}-questions.json`);
  await fs.writeFile(filePath, JSON.stringify(questions, null, 2), 'utf8');
};