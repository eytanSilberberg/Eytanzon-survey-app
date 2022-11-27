import { HomePage } from './pages/home-page'
import { FC } from 'react'


// Routes accesible from the main navigation (in AppHeader)

// type Routes = [{ path: string, component: React.Component, label: string }]

interface RouteDataItem {
    path: string,
    component: FC,
    label: string

}

const routes: RouteDataItem[] = [
    {
        path: '/',
        component: HomePage ,
        label: 'Home 🏠',
    }
]

export default routes;