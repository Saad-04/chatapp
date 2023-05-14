import React, { useState } from 'react'
import { auth,db } from '../firebase';
import {addDoc,serverTimestamp,collection} from 'firebase/firestore'
const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  btn: `w-[20%] bg-green-500`,
}

function SendMessage({scroll}) {
    const [input,setInput]=useState();

const onSubmit=async(e)=>{
e.preventDefault();
const {uid,displayName} = auth.currentUser
// console.log(displayName,uid);
{!input ?alert('please type any message') : await addDoc(collection(db, 'messages'), {
  text: input,
  name: displayName,
  uid,
  timestamp: serverTimestamp()
})}
scroll.current.scrollIntoView({behavior:'smooth'})
setInput('')
}
  return (
    <>
        <form className={style.form} onSubmit={onSubmit} >
            <input value={input} placeholder='write message' onChange={(e)=>setInput(e.target.value)} type="text" className={style.input} />
            <button className={style.btn} type='submit' >Send</button>
        </form>
    </>
  )
}

export default SendMessage