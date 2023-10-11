import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../23_Context/Firebase';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const firebaseFunctions = useFirebase();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // If the user is already logged in, navigate them to the home page
  useEffect(() => {
    if (firebaseFunctions.isLoggedIn) {
      return Navigate('/');
    }
  }, [firebaseFunctions]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await firebaseFunctions.signinUserWithEmailandPassword(email, password);
      alert(result);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="Container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <h1 className='mt-05 mb-5'>OR</h1>
      <button variant='danger' onClick={firebaseFunctions.signinWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default LoginPage;
