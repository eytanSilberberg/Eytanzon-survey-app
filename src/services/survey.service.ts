import { RegisteredVote } from "../cmps/vote/voting-platform"
import { Survey } from "../data/survey"
import { asyncStorageService } from '../servicesJs/basic/async-storage.service'
import { storageService } from "../servicesJs/basic/storage.service"
import { httpService } from "./basic/http.service"


// const BASE_URL = (process.env.NODE_ENV === 'production')
//     ? '/api/survey'
//     : 'http://localhost:3030/api/any2/'

const STORAGE_KEY_SURVEY: string = 'survey'


const setInitialSurveys = async () => {
    let surveysFromStorage: Survey[] = await getCurrSurverys()
    // if (surveysFromStorage.length === 0) {
    //     console.log('in');

    //     storageService.store(STORAGE_KEY_SURVEY, surveyData)
    //     return surveyData
    // }
    return surveysFromStorage
}

async function getCurrSurverys() {

    const surveysFormStorage: Survey[] = await httpService.get('survey')
    return surveysFormStorage
}

async function updateSurveyAnswers(newAnswers: RegisteredVote) {
    try {
        const updatedSurveys: Survey[] = await httpService.patch('survey', newAnswers)
        return updatedSurveys
    } catch (error) {

    }
}

export const surveyService = {
    setInitialSurveys,
    updateSurveyAnswers
}
