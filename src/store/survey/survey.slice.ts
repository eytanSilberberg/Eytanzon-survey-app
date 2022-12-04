import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

import { loadSurveys, saveNewAnswers } from "./survey.actions";
import { SurveyState } from "../../interface/state/survey.state";
import { Survey } from "../../data/survey";


const initialState: SurveyState = {
    value: [],
    status: 'idle'
}

export const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {
        updateSurveys: (state = initialState, action) => {

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadSurveys.fulfilled, (state, action: PayloadAction<Survey[]>) => {
                state.status = 'succeeded'
                state.value = action.payload
            })
            .addCase(loadSurveys.rejected, (state) => {
                state.status = 'failed'
                console.log('Cannot signup')
            })
            .addCase(saveNewAnswers.fulfilled, (state, action: PayloadAction<Survey[] | undefined>) => {
                state.status = 'succeeded'
                if (action.payload === undefined) return
                else state.value = action.payload

            })
            .addCase(saveNewAnswers.rejected, (state) => {
                state.value = state.value
            })


    }
})
export const { updateSurveys } = surveySlice.actions

export const selectSurvey = (state: RootState) => state.survey.value

export default surveySlice.reducer