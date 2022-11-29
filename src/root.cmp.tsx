
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AppHeader } from './cmps/app-header'
import { routes } from './routes'

export function RootCmp() {


  return (
    <Router>
      <AppHeader />
      <div className="root-cmp">
        <main className='main-layout'>
          <Routes>
            {routes.map((route) => <Route key={route.path} path={route.path} element={<route.element />} />)}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

