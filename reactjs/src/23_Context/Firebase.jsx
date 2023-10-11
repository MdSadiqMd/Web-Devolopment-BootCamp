import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailandPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password); // Return the promise here
  };

  const signinUserWithEmailandPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password); // Return the promise here
  };

  const firebaseFunctions = {
    signupUserWithEmailandPassword,
    signinUserWithEmailandPassword,
  };

  return (
    <FirebaseContext.Provider value={firebaseFunctions}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
