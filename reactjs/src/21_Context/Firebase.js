import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database"; // Import database functions

const firebaseConfig = {
    apiKey: "AIzaSyAGBSTMiNYZbSqTg_9W61cZtOYKVlF7WW0",
    authDomain: "fir-17e4a.firebaseapp.com",
    projectId: "fir-17e4a",
    storageBucket: "fir-17e4a.appspot.com",
    messagingSenderId: "333825579797",
    appId: "1:333825579797:web:dbe5ad899eb7205b56e71c",
    databaseURL: "https://fir-17e4a-default-rtdb.firebaseio.com/",
};

// This connects our web app with Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(FirebaseApp);
const database = getDatabase(FirebaseApp);

export const useFirebase=()=>{
    useContext(FirebaseContext);
}

const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailandPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => {
    set(ref(database, key), data);
  };

  const contextValue = {
    signupUserWithEmailandPassword,
    putData,
  };

  return (
    <FirebaseContext.Provider value={contextValue}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

