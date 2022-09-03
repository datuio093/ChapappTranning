
import { getAuth } from "firebase/auth";


function SignOut() {
    const auth = getAuth();
    return auth.currentUser && (
        <button className='signout' onClick={() => auth.signOut()} > Sign Out   </button>
    )
}

export default SignOut;