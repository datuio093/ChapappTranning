import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chatroom from './Chatroom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


 
function BasicExample() {
    
  const auth = getAuth();
  auth.languageCode = 'it';
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const SignInWithGoogle = () => {
        provider.setCustomParameters({
            'login_hint': 'user@example.com'
          });
          const auth = getAuth();
          signInWithPopup(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;     

              console.log("aaaa");
                
            
            }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.customData.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
             
          
            });
        
    }
  return (

  <div className='parent'>
    <div>
  <img src='https://gamemod.vn/wp-content/uploads/2021/09/200920211632108619.png'></img>
    </div>

    <div className='signin'>    

    <p> Sign in With Google </p>
    <Button variant="primary" onClick={SignInWithGoogle} size="lg" active>
      Sign in
    </Button>{' '}

    
   </div>
   </div>
  );
}

export default BasicExample;