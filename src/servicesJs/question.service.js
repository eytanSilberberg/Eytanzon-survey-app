import { httpService } from './basic/http.service'
import { storageService } from './basic/async-storage.service'


const BASE_URL = (process.env.NODE_ENV === 'production')
    ? '/api/question'
    : 'http://localhost:3030/api/question/'

export const questionService = {
    query,
    // getById,
    // remove,
    // save,

}

async function query() {
    // return httpService.get('question')
    // storageService.post('survey', ['asdfasdf', 'asdfasdf', 'gsdfgsdfgsdfg'])
    return storageService.get('survey')
}

// async function getById(questionId) {
//     return await httpService.get(`question/${questionId}`)
// }

// async function remove(questionId) {
//     return httpService.delete(`question/${questionId}`)
// }

// async function save(question) {
//     if (question._id) return httpService.put(`question/${question._id}`, question)
//     else return httpService.post('question', question)
// }











