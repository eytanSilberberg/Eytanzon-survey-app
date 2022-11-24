import { useEffect } from 'react';
import './assets/styles/style.scss';
import { useAppDispatch } from './storeJs/hooks';
import { loadQuestions } from './storeJs/question/question.action'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadQuestions())
  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
