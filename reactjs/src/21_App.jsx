import React, { useContext, useState } from 'react';
import { useFirebase } from './21_Context/Firebase';

function App() {
  const Firebase = useFirebase(); // Custom Firebase context hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      // Sign up the user with Firebase Authentication
      await Firebase.signupUserWithEmailandPassword(email, password);

      // You can store user-related data in Firestore or Realtime Database,
      // but don't store plain passwords.
      const userData = {
        email,
        // You might want to add other user data here.
      };

      // Store user data in Firestore or Realtime Database
      await Firebase.putData('users/' + email, userData);

      alert('Sign up successful');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="App">
      <h1>Firebase</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter Password"
      />
      <button onClick={handleSignUp}>SignUp</button>
    </div>
  );
}

export default App;
