import React from 'react'

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

export default Products