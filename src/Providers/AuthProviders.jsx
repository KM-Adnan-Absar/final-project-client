import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  // States
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
 const googleProvider = new GoogleAuthProvider()
 const axiosPublic = useAxiosPublic(); 
 // Function to create a user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to sign in a user
 const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

const googleSignIn = () => {
  setLoading(true);
  return signInWithPopup(auth , googleProvider);

}


  // Function to log out the user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

// Update Profile User 

const updateUserProfile = (name, photo) => {
return  updateProfile(auth.currentUser , {
    displayName: name, photoURL: photo
  })
  }


  // Manage user state with Firebase Auth
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){

// Get Token 
const userInfo = {email: currentUser.email};
axiosPublic.post('/jwt', userInfo)
.then(res => {
  if(res.data.token){
    localStorage.setItem('access-token', res.data.token)
  }
})
      }
      else{
// TODO: Remove Token
localStorage.removeItem('access-token')
      }
      setLoading(false);
    });

    return Unsubscribe; // Clean up the subscription
  }, [axiosPublic]);

  // Auth context value
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
