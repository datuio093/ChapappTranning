import React, { useRef, useState } from 'react';
import { getFirestore } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";



// const firebaseConfig = {
//     apiKey: "AIzaSyAfgSv9Zzog9vm3Gt6KX6bpZPEPFZDiyJs",
//     authDomain: "my-chat-1eac4.firebaseapp.com",
//     databaseURL: "https://my-chat-1eac4-default-rtdb.firebaseio.com",
//     projectId: "my-chat-1eac4",
//     storageBucket: "my-chat-1eac4.appspot.com",
//     messagingSenderId: "173188183647",
//     appId: "1:173188183647:web:96c12ccf564d29d6244dea",
//     measurementId: "G-NRQ27PFHHL"
// };
// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);





function Chatroom() {
  //   const dummy = useRef();
  
  const auth = getAuth();
  // const messagesRef = firestore.collection('messages');
  // const query = messagesRef.orderBy('createdAt').limit(25);

  // const [messages] = useCollectionData(query, { idField: 'id' });

  // const [formValue, setFormValue] = useState('');


  // const sendMessage = async (e) => {
  //   e.preventDefault();

  //   const { uid, photoURL } = auth.currentUser;

  //   await messagesRef.add({
  //     text: formValue,
  //     createdAt: app.firestore.FieldValue.serverTimestamp(),
  //     uid,
  //     photoURL
  //   })

  //   setFormValue('');
  //   dummy.current.scrollIntoView({ behavior: 'smooth' });
  // }

    return auth.currentUser &&(
      <button  className="sign-out" onClick={() => auth.signOut()}>Sign Out</button> 
  
        
    );

}
// function ChatMessage(props) {
//     const auth = getAuth();
//     const { text, uid, photoURL } = props.message;
  
//     const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
//     return (<>
//       <div className={`message ${messageClass}`}>
//         <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//         <p>{text}</p>
//       </div>
//     </>)
//   }
export default Chatroom;