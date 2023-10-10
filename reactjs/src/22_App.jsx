import React from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import app from "./22_firebase"

const firestore=getFirestore(app);

function App() {
    const  writeData=()=>{
        addDoc(collection(firestore,"cities"),{  // addDoc method takes two arguments first --> collection name specifying that it is in firestore, second --> data
            name:"Vijayawada",
            pincode:52007,
            lat:123,
            long:456,
        });
    };

  return (
    <div className="App">
        <h1>Firebase Store</h1>
        <button onClick={writeData}>Add Data</button>
    </div>
  )
}

export default App