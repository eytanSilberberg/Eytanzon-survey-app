import { createAsyncThunk } from "@reduxjs/toolkit";

import { userService } from '../../servicesJs/user.service'

import { Credentials, User } from "../../interface/user.interface";

// export function loadUsers() {
//     return async (dispatch) => {
//         try {
//             const users = await userService.getUsers()
//             dispatch({ type: 'SET_USERS', users })
//         } catch (err) {
//             console.log('UserActions: err in loadUsers', err)
//         }
//     }
// }


export const loadUsers = createAsyncThunk(
    'user/loadUsers',
    async () => {
        const users = await userService.getUsers()
        return users
    }
)
export const login = createAsyncThunk(
    'user/login',
    async (credentials: Credentials) => {
        const user: User = await userService.login(credentials)
        return user
    }
)

export const signup = createAsyncThunk(
    'user/signup',
    async (credentials: User) => {
        const user: User = await userService.signup(credentials)
        return user
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    async () => {
        await userService.logout()
    }
)

export const removeUser = createAsyncThunk(
    'user/removeUser',
    async (userId: string) => {
        await userService.remove(userId)
        return userId
    }
)


