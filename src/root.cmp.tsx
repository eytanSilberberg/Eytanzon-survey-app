
import { useEffect, useRef } from 'react';
import './assets/styles/style.scss';
import { User } from './interface/user.interface';

import { LoginSignup } from './pages/login-signup'
import { useAppSelector } from './store/hooks';
import { selectUser } from './store/user/userSlice';


function App() {
  
   const user =  useAppSelector(selectUser)
   console.log(user)
  return (
    <div className="App">
      <LoginSignup />
      {user.length!==0 && <pre>{user[0].fullName}</pre>}

    </div>
  )
}

export default App;
