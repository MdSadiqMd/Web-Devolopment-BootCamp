import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../23_Context/Firebase';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const firebaseFunctions = useFirebase(); // Use the useFirebase hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // If the User is already Signed In then navigate him to Home
  useEffect(() => {
    if (firebaseFunctions.isLoggedIn) {
      return Navigate('/'); // Use Navigate to navigate to the home page
    }
  }, [firebaseFunctions]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await firebaseFunctions.signupUserWithEmailandPassword(email, password); // Use the correct function name
      alert(result);
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className="Container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
