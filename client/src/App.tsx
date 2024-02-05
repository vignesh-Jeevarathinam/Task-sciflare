
import {Routes, Route} from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signUp';
import UserList from './components/list';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signUp' element={<SignUp/>} />
      <Route path='/List' element={<UserList/>} />

    </Routes>
    
    </>
  )
}

export default App
