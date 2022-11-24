import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { questionReducer } from './question/question.reducer';
// import { userReducer } from './user/user.reducer'
export const store = configureStore({
  reducer: {
    // userModule: userReducer,
    questionModule: questionReducer
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
