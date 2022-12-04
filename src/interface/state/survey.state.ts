import { Survey } from "../../data/survey";

export interface SurveyState {
    value: Survey[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
}