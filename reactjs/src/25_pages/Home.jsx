import React from 'react'

const Home = () => {
    return (
      <div>
        <h1>Welcome to the React App!</h1>
        <p>This is the home page.</p>
        <Link to="/products">View Products</Link>
      </div>
    );
  };

export default Home