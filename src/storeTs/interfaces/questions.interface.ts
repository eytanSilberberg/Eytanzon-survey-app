import { Question } from '../../data/question'

interface SetQuestions {
    type: 'SET_QUESTIONS'
    questions: Question[]
}

export type Action = SetQuestions