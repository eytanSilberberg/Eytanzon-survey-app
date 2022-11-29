import { NavLink } from "react-router-dom"



export const AppHeader = () => {
    return <header className='flex space-between'>
        <h1><NavLink to={'/'}>Logo</NavLink></h1>
        <nav>
            <NavLink to={'/about'}>About</NavLink>
        </nav>
    </header>
}