import React, { useRef, useState } from 'react';
import { getFirestore ,Timestamp  } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore"; 
import { query, orderBy, limit } from "firebase/firestore";  
import firebase from 'firebase/compat/app';
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
const Getdata = async () =>{
  try {
    const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
    const docRef = await addDoc(collection(db, "messages"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
} 





function Chatroom() {
  var date = new Date();

  const auth = getAuth();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const dummy = useRef();

  
  const messagesRef = collection(db, "messages");
  //const query = orderBy('createdAt').limit(25);
  const query1 = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(query1, { idField: 'id' });
  

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const { uid, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"),{
      text: formValue,
      createdAt: date.getTime() ,
      uid,
      photoURL
    });
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
  <>
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <span ref={dummy}></span> 
    </main>
    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
      <button type="submit" disabled={!formValue}>🕊️</button>
    </form>
  </>
  )
}
function ChatMessage(props) {
    const auth = getAuth();
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
    </>)
  }
export default Chatroom;