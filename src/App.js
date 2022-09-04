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
  apiKey: "AIzaSyAfgSv9Zzog9vm3Gt6KX6bpZPEPFZDiyJs",
  authDomain: "my-chat-1eac4.firebaseapp.com",
  databaseURL: "https://my-chat-1eac4-default-rtdb.firebaseio.com",
  projectId: "my-chat-1eac4",
  storageBucket: "my-chat-1eac4.appspot.com",
  messagingSenderId: "173188183647",
  appId: "1:173188183647:web:96c12ccf564d29d6244dea",
  measurementId: "G-NRQ27PFHHL"
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
