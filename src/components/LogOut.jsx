import React from 'react'
import { auth } from '../firebase'

function LogOut() {
    const style = {
        button: `bg-gray-200 px-4 py-2 hover:bg-gray-100 hover:bg-red-600 hover:duration-300 hover:text-xl hover:text-white`
    }
    const logOutNow = ()=>{
      logOutNow(auth)
    }
  return (
    <button className={style.button} onClick={()=>auth.signOut()} > 
        Logout
    </button>
  )
}

export default LogOut