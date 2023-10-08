import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../20_firebase';

const auth = getAuth(app);

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert('User created successfully');
            })
            .catch((error) => {
                console.error('Error creating user:', error);
                alert('Error creating user');
            });
    };

    return (
        <div className="signupPage">
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Enter your email" />
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" required placeholder="Enter your Password" />
            <button onClick={createUser}>Sign Up</button>
        </div>
    );
}

export default Signup;
