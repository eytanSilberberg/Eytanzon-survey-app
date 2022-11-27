
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AppHeader } from './cmps/app-header'
import routes from './routes'

export function RootCmp() {


  return (
    <Router>
      <div className="root-cmp">
        <AppHeader />
        <main>
          <Routes>
            {routes.map((route) => <Route path={route.path}  exact={true} component={route.component} />)}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

