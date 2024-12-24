import express from 'express';
import { addQuestion, getQuestions } from '../controllers/questionController.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.post('/:category', asyncHandler(addQuestion));
router.get('/:category', asyncHandler(getQuestions));

export default router;