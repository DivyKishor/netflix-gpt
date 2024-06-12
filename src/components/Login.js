import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [isSignInForm, setIsSignInForm] = useState(true);
    
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () =>{
        // Validate the form data
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img alt="background" src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-1/3 bg-black bg-opacity-70 rounded-lg absolute p-12 my-36 mx-auto right-0 left-0 text-white'>
            <h1 className='font-bold text-3xl my-4 mx-2'>{isSignInForm? 'Sign In' :'Sign Up'}</h1>
            {!isSignInForm && <input required={true} type="text" placeholder="Full Name" 
                className='p-4 my-4 w-full bg-gray-700 rounded-lg' />}
            <input ref={email} type="text" placeholder="Email Address" 
                className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            <input ref={password} type="password" placeholder='Password' 
                className='p-4 w-full my-4 bg-gray-700 rounded-lg' />
            <p className='p-2 font-bold text-red-500'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-800 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm? 'Sign In' :'Sign Up'}</button>
            <p className='py-4 cursor-pointer' onClick={() => setIsSignInForm(!isSignInForm)}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already have an account. Sign In"}</p> 
        </form>
    </div>
  )
}

export default Login
