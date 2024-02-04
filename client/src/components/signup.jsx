
import { Link, useNavigate  } from 'react-router-dom'

function signUp() {
    const navigate = useNavigate();
  return (
    <>
    {/* <div>signUp by vicky</div>
    {/* <button onClick={() => {navigate('/')}}>login page</button> */}
    {/* <Link to=''>login page</Link> */}
     <div className='flex items-center justify-center bg-slate-100 min-h-screen'>
        <h2 className='text-3xl font-bold'>Sign up</h2>
        <div className='bg-white'>

        </div>

     </div>
    </>
  )
}

export default signUp