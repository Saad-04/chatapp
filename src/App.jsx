import Navbar from './components/Navbar';
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth';
import Chat from './components/Chat';
function App() {
  const style = {
    appContainer: `max-w-[728px] mx-auto text-center`,
    sectionContainer: `flex flex-col h-full bg-gray-100 mt-10 shadow-xl border relative`,
  };

const [user] = useAuthState(auth);
console.log(user);

  return (
    <div className="App">
       <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {/* chat sectin  */}
        {user ? <Chat/> :null }
      </section>
    </div>
     
    </div>
  )
}

export default App
