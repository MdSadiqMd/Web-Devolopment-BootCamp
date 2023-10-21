import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getFirestore,collection,addDoc,getDocs, getDoc } from "firebase/firestore";
import { getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage";

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
const firestore=getFirestore(FirebaseApp);
const storage=getStorage(FirebaseApp);
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

  // Listing Books in the Website
  const handleCreateNewListing = async (name,isbn,price,cover) =>{
    const imageRef = ref(storage,`uploads/images/${Date.now()} - ${cover.name}`); // Added Date.now() to generate a unique path for every other image
    const uploadResult=await uploadBytes(imageRef,cover);
    return await addDoc(collection(firestore,'books'),{
      name,
      isbn,
      price,
      imageURL: uploadResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    })
  }

  const listAllBooks=()=>{
    return getDocs(collection(firestore,'books'));
  }

  const getBookById=async()=>{
    const docRef=doc(firestore,"books",id);
    const result=await getDoc(docRef);
    return result;
  }

  const getImageURL=(path)=>{
    return getDownloadURL(ref(storage,path));
  }

  const placeOrder=async(bookId,qty)=>{
    const collectionRef=collection(firestore,'books',bookId,'order');
    const result=await addDoc(collectionRef,{
      userID:user.uid,
      userEmail:user.email,
      displayName:user.displayName,
      photoURL:user.photoURL,
      qty,
    });
    return result;
  }

  const firebaseFunctions = {
    isLoggedIn,
    signinWithGoogle,
    signupUserWithEmailandPassword,
    signinUserWithEmailandPassword,
    handleCreateNewListing,
    listAllBooks,
    getImageURL,
    getBookById,
    placeOrder,
  };

  return (
    <FirebaseContext.Provider value={firebaseFunctions}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
