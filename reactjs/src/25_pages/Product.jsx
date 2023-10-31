import React from 'react'

const Product = () => {
    const { id } = useParams(); // Get the product ID from the URL
    return (
      <div>
        <h2>Product Details</h2>
        <p>Product ID: {id}</p>
      </div>
    );
};

export default Product