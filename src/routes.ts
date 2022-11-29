import { FunctionComponent } from 'react'

import { HomePage } from './pages/home-page'
import { AboutPage } from './pages/about'
import { LoginSignup } from './pages/login-signup'


interface RouteStructure {
    path: string
    element: FunctionComponent
}

export const routes: RouteStructure[] = [
    {
        path: '',
        element: HomePage
    },
    {
        path: '/about',
        element: AboutPage
    },
    {
        path: '/singup',
        element: LoginSignup
    }
]