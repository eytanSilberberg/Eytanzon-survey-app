import { FormEvent, useState } from 'react';
import { User } from '../interface/user.interface';

import { useAppDispatch } from '../store/hooks';
import { signup } from '../store/user/user.actions';

export const LoginSignup = () => {

    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()

    const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
        const field = ev.currentTarget.name
        const value = ev.currentTarget.value
        switch (field) {
            case 'fullname':
                setFullName(value)
                break
            case 'username':
                setUsername(value)
                break
            case 'password':
                setPassword(value)
                break
        }
    }

    const onSignup = (ev: FormEvent) => {
        ev.preventDefault()
        const credentials: User = { username, fullName, password }
        dispatch(signup(credentials))
    }

    return <>
        <form onSubmit={onSignup} >
            <label> User Name
                <input placeholder='Jhon Do' type="text" name='username' onChange={handleChange} />
            </label>
            <label> Full Name
                <input placeholder='Eytan Hahomo' type="text" name='fullname' onChange={handleChange} />
            </label>
            <label> Password
                <input placeholder='XXXXX' type="text" name='password' onChange={handleChange} />
            </label>

            <button>Submit</button>
        </form>
    </>
} 