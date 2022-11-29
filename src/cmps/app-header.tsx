import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { logout } from "../store/user/userActions"
import { selectUser } from "../store/user/userSlice"



export const AppHeader = () => {

    const user = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const onLogout = () => {
        dispatch(logout())
    }

    return <header className='flex space-between'>
        <h1><NavLink to={'/'}>Logo</NavLink></h1>
        <nav>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            {!user && <NavLink to={'/singup'}>Sing Up</NavLink>}
            {user && <span onClick={onLogout} style={{ color: "red", cursor: "pointer" }}>logout</span>}
        </nav>
    </header>
}