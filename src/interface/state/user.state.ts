import { User } from "../user.interface";

// export interface UserState {
//     value: User[],
//     status: 'idle' | 'loading' | 'failed';
// }

// export interface UsersState {
//     value: User[],
//     status: 'idle' | 'loading' | 'failed';
// }
export interface UserState {
    value: {
        user: User[],
        users: User[]
    }
    status: 'idle' | 'loading' | 'failed';
}