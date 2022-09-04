import logo from './logo.svg';
import './App.css';
import Signin from './components/Singin'
import Chatroom from './components/Chatroom';
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SignOut from './components/Signout';


const firebaseConfig = {

};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);



function App() {

const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
           <SignOut />
      </header>
      <section>
        {user ? <Chatroom /> : <Signin />}
      </section>

    </div>
  );

}

export default App;
