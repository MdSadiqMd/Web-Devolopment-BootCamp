import React from 'react'
import { addDoc, collection, getDoc, getFirestore, doc, query, where, getDocs, updateDoc } from "firebase/firestore"
import {app} from './22_firebase'

const firestore=getFirestore(app);

function App() {

    // Creating a Collection and Adding Data into it (Fireabase Store)
    const  writeData=async ()=>{
        await addDoc(collection(firestore,"cities"),{  // addDoc method takes two arguments first --> collection name specifying that it is in firestore(reference created up using app), second --> data
            name:"Vijayawada",
            pincode:52007,
            lat:123,
            long:456,
            Exists:true,
        });
    };

    // Creating Sub Collection in the Collection and Adding Data to it
    const createSubCollection=async ()=>{
        await addDoc(collection(firestore,"cities/GfjUPQbuXsfGJZZs2Keu/places"),{
            name:"Sanath Nagar",
            pincode:52007,
        });
    };


    // Accessing Data from Firestore
    const getDocument=async ()=>{
        const ref=doc(firestore,"cities","GfjUPQbuXsfGJZZs2Keu")
        console.log(await getDoc(ref));
    }

    // Performing Operatins on the Data and bringing desired ones
    const getDocumentByQuery=async ()=>{
        const collectionRef=collection(firestore,"cities");
        const q=query(collectionRef,where("Exists","==",true));
        const snapShot=await getDocs(q);
        snapShot.forEach((data)=>console.log(data.data()))
    }

    // Updating Data
    const update=async ()=>{
        const docRef=doc(firestore,'cities','GfjUPQbuXsfGJZZs2Keu');
        await updateDoc(docRef,{
            Exists:false,
        })
    }

  return (
    <div className="App">
        <h1>Firebase Store</h1>
        <button onClick={writeData}>Add Data</button>
        <br />
        <button onClick={createSubCollection}>Put Sub Data</button>
        <br />
        <button onClick={getDocument}>Display Data</button>
        <br />
        <button onClick={getDocumentByQuery}>Get Query Data</button>
        <br />
        <button onClick={update}>Update Data</button>
    </div>
  )
}

export default App