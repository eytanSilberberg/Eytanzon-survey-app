import { createAsyncThunk } from "@reduxjs/toolkit"
import { RegisteredVote } from "../../cmps/vote/voting-platform";
import { surveyService } from "../../services/survey.service"
import { updateSurveys } from "./survey.slice";
import { RootState, store } from "../store";
import { useDispatch } from "react-redux";



export const loadSurveys = createAsyncThunk(
    'survey/loadInitialSurveys',
    async () => {
        const surveys = await surveyService.setInitialSurveys()
        console.log(surveys);

        return surveys
    }
)


export const saveNewAnswers = createAsyncThunk(
    'survey/updateSurveyAnswers',
    async (newAnswers: RegisteredVote) => {
        console.log('hi');
        const updatedSurveys = await surveyService.updateSurveyAnswers(newAnswers)
        console.log(updatedSurveys);

        return updatedSurveys
    }
)