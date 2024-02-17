import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img alt="background" src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
        </div>
        <form className='w-3/12 bg-black bg-opacity-70 rounded-lg absolute p-12 my-36 mx-auto right-0 left-0 text-white'>
            <h1 className='font-bold font-3xl my-4 mx-2'>Sign In</h1>
            <input type="text" placeholder="Email Address" 
                className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            <input type="password" placeholder='Password' 
                className='p-4 w-full my-4 bg-gray-700 rounded-lg' />
            <button className='p-4 my-6 bg-red-800 w-full rounded-lg'>Sign In</button>
            <p className='py-4'>New to Netflix? Sign Up Now</p>
        </form>
    </div>
  )
}

export default Login
