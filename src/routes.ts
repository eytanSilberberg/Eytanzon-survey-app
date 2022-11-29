import { FunctionComponent } from 'react'

import { HomePage } from './pages/home-page'
import { AboutPage } from './pages/about'


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
    }
]