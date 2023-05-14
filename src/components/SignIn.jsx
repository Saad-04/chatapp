import React from 'react'
import GoogleButton from 'react-google-button'
import {GoogleAuthProvider,signInWithRedirect} from 'firebase/auth'
import { auth } from '../firebase'
function SignIn() {
    const style = {
        wrapper: `flex justify-center`
    }
const googleSignIn = ()=>{

    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider)
}

    return (
    <div className={style.wrapper}>
        <GoogleButton onClick={()=>googleSignIn()} />
    </div>
    )
}

export default SignIn