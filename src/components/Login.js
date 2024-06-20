import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../utils/firebase';
import { BG_URL } from '../utils/constants';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [isSignInForm, setIsSignInForm] = useState(true);
    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () =>{
        // Validate the form data
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return;
        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                //console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(error.code + ": " + error.message);
                // ..
            });

        }
        else{
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //console.log(user);
                
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //console.log(error.message); 
                setErrorMessage(error.code + ": " + error.message);
            });
        }
        
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img alt="background" src={BG_URL}/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-1/3 bg-black bg-opacity-70 rounded-lg absolute p-12 my-36 mx-auto right-0 left-0 text-white'>
            <h1 className='font-bold text-3xl my-4 mx-2'>{isSignInForm? 'Sign In' :'Sign Up'}</h1>
            {!isSignInForm && <input ref={name} required={true} type="text" placeholder="Full Name" 
                className='p-4 my-4 w-full bg-gray-700 rounded-lg' />}
            <input ref={email} required={true} type="text" placeholder="Email Address" 
                className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            <input ref={password} required={true} type="password" placeholder='Password' 
                className='p-4 w-full my-4 bg-gray-700 rounded-lg' />
            <p className='p-2 font-bold text-red-500'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-800 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm? 'Sign In' :'Sign Up'}</button>
            <p className='py-4 cursor-pointer' onClick={() => setIsSignInForm(!isSignInForm)}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already have an account. Sign In"}</p> 
        </form>
    </div>
  )
}

export default Login
