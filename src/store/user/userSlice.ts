import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

import { UserState } from "../../interface/state/user.state";
import { signup, logout, login, removeUser, loadUsers, setLoggedinUser } from "./userActions";
import { User } from "../../interface/user.interface";


const initialState: UserState = {
    value: {
        user: null,
        users: []
    }
    ,
    status: 'idle'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = 'idle'
                state.value = { users: [...state.value.users, action.payload], user: action.payload }
            })
            .addCase(signup.rejected, (state) => {
                state.status = 'failed'
                console.log('Cannot signup')
            })
            .addCase(logout.fulfilled, (state) => {
                state.status = 'idle'
                state.value = { ...state.value, user: null }
            })
            .addCase(logout.rejected, (state) => {
                state.status = 'failed'
                console.log('Cannot logout')
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = 'idle'
                state.value = { ...state.value, user: action.payload }
            })
            .addCase(login.rejected, (state) => {
                state.status = 'failed'
                console.log('Cannot login')
            })
            .addCase(removeUser.fulfilled, (state, action: PayloadAction<string>) => {
                state.status = 'idle'
                state.value = { users: state.value.users.filter(user => user._id !== action.payload), user: null }
            })
            .addCase(removeUser.rejected, (state) => {
                state.status = 'failed'
                console.log('Cannot remove user')
            })
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.status = 'idle'
                state.value = { ...state.value, users: action.payload }
            })
            .addCase(loadUsers.rejected, (state) => {
                state.status = 'failed'
                console.log('Cannot load users')
            })
            .addCase(setLoggedinUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = 'idle'
                state.value = { ...state.value, user: action.payload }
            })
            .addCase(setLoggedinUser.rejected, (state) => {
                state.status = 'failed'
                console.log('Cannot get logged in user')
            })

    }
})

export const selectUser = (state: RootState) => state.user.value.user
export const selectUsers = (state: RootState) => state.user.value.users

export default userSlice.reducer