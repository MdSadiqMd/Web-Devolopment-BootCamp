import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBFqoOEK_UXw2k9abTypbYDBIGchMPXfTE",
  authDomain: "bookify-a6420.firebaseapp.com",
  projectId: "bookify-a6420",
  storageBucket: "bookify-a6420.appspot.com",
  messagingSenderId: "533326106738",
  appId: "1:533326106738:web:0d88bab58a3879c096f2eb"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(FirebaseApp);
const googleProvider=new GoogleAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

  const [user,setUser]=useState(null);

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth,(user)=>{
      if(user){
      setUser(user)
      } else{
      setUser(null)
      }
      })
  },[])

  const signupUserWithEmailandPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password); // Return the promise here
  };

  const signinUserWithEmailandPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password); // Return the promise here
  };

  const signinWithGoogle=()=>{
    signInWithPopup(firebaseAuth,googleProvider)
  }

  const isLoggedIn=user?true:false;

  const firebaseFunctions = {
    isLoggedIn,
    signinWithGoogle,
    signupUserWithEmailandPassword,
    signinUserWithEmailandPassword,
  };

  return (
    <FirebaseContext.Provider value={firebaseFunctions}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
