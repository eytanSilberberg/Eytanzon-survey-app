// import { Action } from "../interfaces/questions.interface"
import { Question } from "../../data/question"
import { AnyAction } from "@reduxjs/toolkit"
const initialState: { questions: Question[] } = {
    questions: [],
}


export function questionReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case 'SET_QUESTIONS':
            return { questions: action.questions }
        // case 'ADD_QUESTION':
        //     return { questions: [...state.questions, action.question] }
        // case 'REMOVE_QUESTION':
        //     return { question: state.questions.filter(question => question._id !== action.question._id) }
        // case 'UPDATE_QUESTION':
        //     return { questions: state.questions.map(question => question._id === action.question._id ? action.question : question) }
        default:
            return state
    }

}