import { HomePage } from './pages/home-page'
import { AboutPage } from './pages/about'
import { VotePage } from './pages/vote.page'
import { FunctionComponent } from 'react';


interface RouteStructure {
    path: string
    element: FunctionComponent
}

export const routes: RouteStructure[] = [
    // export const routes = [
    {
        path: '',
        element: HomePage
    },
    {
        path: '/about',
        element: AboutPage
    },
    {
        path: '/vote',
        element: VotePage
    },

]