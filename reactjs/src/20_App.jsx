import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './20_firebase';
import Signup from './20_pages/signup';
import Signin from './20_pages/signin';

const auth = getAuth(app);

function App() {
    // Function to create an authorized user
    const createAuthorizedUser = () => {
        createUserWithEmailAndPassword(auth, 'mohammadsadiq4950@gmail.com', 'Millionaire@4950')
            .then((userCredential) => {
                console.log('Authorized user created successfully:', userCredential.user);
            })
            .catch((error) => {
                console.error('Error creating authorized user:', error);
            });
    };
     
    // Checking whether a user is signed in before or not by onAuthStateChanged

    const [user,setUser]=useState(null);

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                alert("Welcome Back " ,user);
                setUser(user);
            } else {
                alert("Please Sign In");
                setUser(null);
            }
        })
    },[])
    
    if(user===null){
        return (
            <div className="App">
                <Signup />
                <Signin />
                <button onClick={createAuthorizedUser}>Create Authorized User</button>
            </div>
        );
    } else {
        <div className="App">
            <h1>Hello {user.email}</h1>
            <button onClick={signOut(auth)}>Log Out</button>
        </div>
    }
}

export default App;
