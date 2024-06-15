import { signOut } from '@firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router'
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  //console.log('from header' + JSON.stringify(user));
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");  
    })
  }
  return (
    <>
    <div className='absolute z-10 w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
      <img className="w-52"
        alt="logo" 
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
      {user && (<button onClick={handleSignOut}>Sign Out</button>)}
    </div>
  
  </>
  )
}

export default Header
