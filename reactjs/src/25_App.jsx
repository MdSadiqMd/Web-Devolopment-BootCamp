import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
} from 'react-router-dom';

// Component to display the home page
const Home = () => {
  return (
    <div>
      <h1>Welcome to the React App!</h1>
      <p>This is the home page.</p>
      <Link to="/products">View Products</Link>
    </div>
  );
};

// Component to display a list of products
const Products = () => {
  const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Component to display a single product
const Product = () => {
  const { id } = useParams(); // Get the product ID from the URL
  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
