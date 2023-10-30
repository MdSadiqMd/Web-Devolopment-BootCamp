import React from 'react';
import { Link } from 'react-router-dom';
import Products from './Products'; // Assuming this is the correct import path for your Products component
import Product from './Product'; // Assuming this is the correct import path for your Product component

const App = () => {
  return (
    <>
      <h1>React Query</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
      </div>
    </>
  );
}

export default App;
