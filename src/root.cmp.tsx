
import { useEffect, useRef } from 'react';
import './assets/styles/style.scss';
import { User } from './interface/user.interface';

import { LoginSignup } from './pages/login-signup'
import { useAppSelector } from './store/hooks';
import { selectUser } from './store/user/userSlice';


function App() {
  
  const userRef< = useRef()
   userRef.current =  useAppSelector(selectUser)
  return (
    <div className="App">
      <LoginSignup />
      {user.length && <h1>{user[0].username}</h1>}

    </div>
  )
}

export default App;
