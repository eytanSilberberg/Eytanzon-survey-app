import { questionService } from "../../servicesJs/question.service.js";
import { Dispatch } from 'redux'
// import { userService } from "../services/user.service.js";
// import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

// // Action Creators:
// export function getActionRemoveQuestion(questionId) {
//     return {
//         type: 'REMOVE_CAR',
//         questionId
//     }
// }
// export function getActionAddQuestion(question) {
//     return {
//         type: 'ADD_CAR',
//         question
//     }
// }
// export function getActionUpdateQuestion(question) {
//     return {
//         type: 'UPDATE_CAR',
//         question
//     }
// }

// var subscriber

export function loadQuestions() {
    return (dispatch: Dispatch) => {
        questionService.query()
            .then(questions => {
                console.log('Questions from DB:', questions)
                dispatch({
                    type: 'SET_QUESTIONS',
                    questions
                })
            })
            .catch(err => {
                // showErrorMsg('Cannot load questions')
                console.log('Cannot load questions', err)
            })

        // if (subscriber) questionService.unsubscribe(subscriber)
        // subscriber = (ev) => {
        //     console.log('Got notified', ev.data)
        //     dispatch(ev.data)
        // }
        // questionService.subscribe(subscriber)
    }
}

// export function removeQuestion(questionId) {
//     return async (dispatch) => {
//         try {
//             await questionService.remove(questionId)
//             console.log('Deleted Succesfully!');
//             dispatch(getActionRemoveQuestion(questionId))
//             showSuccessMsg('Question removed')
//         } catch (err) {
//             showErrorMsg('Cannot remove question')
//             console.log('Cannot remove question', err)
//         }
//     }
// }

// export function addQuestion(question) {
//     return (dispatch) => {

//         questionService.save(question)
//             .then(savedQuestion => {
//                 console.log('Added Question', savedQuestion);
//                 dispatch(getActionAddQuestion(savedQuestion))
//                 showSuccessMsg('Question added')
//             })
//             .catch(err => {
//                 showErrorMsg('Cannot add question')
//                 console.log('Cannot add question', err)
//             })
//     }
// }

// export function updateQuestion(question) {
//     return (dispatch) => {
//         questionService.save(question)
//             .then(savedQuestion => {
//                 console.log('Updated Question:', savedQuestion);
//                 dispatch(getActionUpdateQuestion(savedQuestion))
//                 showSuccessMsg('Question updated')
//             })
//             .catch(err => {
//                 showErrorMsg('Cannot update question')
//                 console.log('Cannot save question', err)
//             })
//     }
// }

// export function addToQuestiont(question) {
//     return (dispatch) => {
//         dispatch({
//             type: 'ADD_TO_CART',
//             question
//         })
//     }
// }
// export function removeFromQuestiont(questionId) {
//     return (dispatch) => {
//         dispatch({
//             type: 'REMOVE_FROM_CART',
//             questionId
//         })
//     }
// }
// export function checkout() {
//     return async (dispatch, getState) => {
//         try {
//             const state = getState()
//             const total = state.questionModule.questiont.reduce((acc, question) => acc + question.price, 0)
//             const score = await userService.changeScore(-total)
//             dispatch({ type: 'SET_SCORE', score })
//             dispatch({ type: 'CLEAR_CART' })
//             showSuccessMsg('Charged you: $' + total.toLocaleString())
//         } catch (err) {
//             showErrorMsg('Cannot checkout, login first')
//             console.log('QuestionActions: err in checkout', err)
//         }
//     }
// }


// // Demo for Optimistic Mutation (IOW - Assuming the server call will work, so updating the UI first)
// export function onRemoveQuestionOptimistic(questionId) {

//     return (dispatch, getState) => {

//         dispatch({
//             type: 'REMOVE_CAR',
//             questionId
//         })
//         showSuccessMsg('Question removed')

//         questionService.remove(questionId)
//             .then(() => {
//                 console.log('Server Reported - Deleted Succesfully');
//             })
//             .catch(err => {
//                 showErrorMsg('Cannot remove question')
//                 console.log('Cannot load questions', err)
//                 dispatch({
//                     type: 'UNDO_REMOVE_CAR',
//                 })
//             })
//     }
// }