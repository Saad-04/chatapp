import React, { useRef, useState, useEffect } from 'react';
import Message from './Message';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import { db } from '../firebase';
import SendMessage from './SendMessage';
// import SendMessage from './SendMessage' 
 const style = {
    main: `flex flex-col p-[10px] relative h-[100vh] `,
  };


function Chat() {
  const [message, setMessage] = useState([]);
  const scroll = useRef()

  // useEffect
  useEffect(() => {
    const datas = query(collection(db, 'messages'), orderBy('timestamp'))
    const subscribeOn = onSnapshot(datas, (querySnap) => {
      let allMessages = []
      querySnap.forEach((doc) => {
        allMessages.push({ ...doc.data(), id: doc.id })
        // console.log(n);
        // allMessages.push({...doc.data()})
      })
      setMessage(allMessages)
      console.log(message);
    })
    return () => subscribeOn()
  }, [])

  return (
    <>
      <main className={style.main}style={{overFlow:'scroll'}} >
        {message.map((element) => {
          return <Message key={element.id} name={element.name} msg={element.text} />
        })}
      </main>

      {/* Send Message Compoenent */}
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>

    </>
  )
}

export default Chat