import { createContext, useContext } from "react";

const FirebaseContext=createContext(null);

export const useFirebase=useContext(FirebaseContext);

export const FirebaseProvider=(props)=>{
    return(
        <FirebaseProvider>
            {props.children}
        </FirebaseProvider>
    )
};