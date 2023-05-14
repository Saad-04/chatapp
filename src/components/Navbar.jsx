import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import LogOut from './LogOut';
import SignIn from './SignIn';


function Navbar() {
    const style = {
        nav: `bg-gray-800 h-16 flex justify-between items-center p-3`,
        heading: `text-white text-xl`
    }
   const [user] = useAuthState(auth)
  return (
    <div className={style.nav}>
    <h1 className={style.heading}>Chat App</h1>
    {user ? <LogOut /> : <SignIn />}

  </div>
  )
}

export default Navbar