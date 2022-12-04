import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './user/user.slice'
import surveyReducer from './survey/survey.slice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        survey: surveyReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
