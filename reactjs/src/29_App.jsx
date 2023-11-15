import React, { useEffect, useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      if (data && data.products) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.length > 0 && (
        <div className='grid grid-cols-3 gap-4'>
          {products.map((prod) => (
            <div key={prod.id} className='p-4'>
              <img src={prod.thumbnail} alt={prod.title} className='w-400 h-400' />
              <span className='block mt-2'>{prod.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
