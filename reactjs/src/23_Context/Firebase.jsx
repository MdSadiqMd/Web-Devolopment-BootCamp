import { createContext, useContext } from "react";

const FirebaseContext=createContext(null);

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBFqoOEK_UXw2k9abTypbYDBIGchMPXfTE",
  authDomain: "bookify-a6420.firebaseapp.com",
  projectId: "bookify-a6420",
  storageBucket: "bookify-a6420.appspot.com",
  messagingSenderId: "533326106738",
  appId: "1:533326106738:web:0d88bab58a3879c096f2eb"
};

// Initialize Firebase
const FireabaseApp = initializeApp(firebaseConfig);

export const useFirebase=()=>useContext(FirebaseContext);

export const FirebaseProvider=(props)=>{
    return(
        <FirebaseProvider>
            {props.children}
        </FirebaseProvider>
    )
};