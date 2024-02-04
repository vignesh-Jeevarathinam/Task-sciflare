import Login from './components/login'
// eslint-disable-next-line no-unused-vars
import SignUp from './components/signUp';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signUp' element={<SignUp/>} />
    </Routes>
    
    </>
  )
}

export default App
