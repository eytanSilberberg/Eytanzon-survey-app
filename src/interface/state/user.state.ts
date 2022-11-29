import { User } from "../user.interface";

export interface UserState {
    value: {
        user: User | null,
        users: User[]
    }
    status: 'idle' | 'loading' | 'failed';
}