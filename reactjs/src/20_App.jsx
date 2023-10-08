import React from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
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
    
    return (
        <div className="App">
            <Signup />
            <Signin />
            <button onClick={createAuthorizedUser}>Create Authorized User</button>
        </div>
    );
}

export default App;
