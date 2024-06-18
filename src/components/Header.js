import { signOut } from '@firebase/auth';
import React , {useEffect} from 'react'
import { useNavigate } from 'react-router'
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log('from header' + JSON.stringify(user));

  useEffect(() => {
      
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //console.log(user);
        const { uid, email, displayName } = user;
        dispatch(addUser({uid: uid, email: email, name: displayName}));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();

  },[]);

  const handleSignOut = () => {
    signOut(auth).then(() => { 
    })
  }
  return (
    <>
    <div className='absolute z-10 w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
      <img className="w-52"
        alt="logo" 
        src={LOGO} />
      {user !== null && (<button onClick={handleSignOut}>Sign Out</button>)}
    </div>
  
  </>
  )
}

export default Header
