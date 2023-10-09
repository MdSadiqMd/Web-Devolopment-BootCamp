import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase auth
import { app } from '../20_firebase';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app);

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Sign-in Success");
      })
      .catch((error) => {
        // Handle errors
        alert(error.message);
      });
  }

  return (
    <div className="signinPage">
      <h1>Sign In</h1>
      <h1>Signin Page</h1>
      <label htmlFor="email">Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email"
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your Password"
      />
      <button onClick={signinUser}>Sign In</button>
    </div>
  )
}

export default Signin;
