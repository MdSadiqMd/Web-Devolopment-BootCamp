import React, { useEffect, useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

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

  const setPageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div className='container mx-auto my-8'>
      {products.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {products.slice(page * 10 - 10, page * 10).map((prod) => (
            <div key={prod.id} className='p-4'>
              <img src={prod.thumbnail} alt={prod.title} className='w-full h-auto' />
              <span className='block mt-2 text-center'>{prod.title}</span>
            </div>
          ))}
        </div>
      )}
      {products.length > 0 && (
        <div className='flex justify-center mt-4'>
          <button
            onClick={() => setPage(page - 1)}
            className={`px-4 py-2 border rounded ${
              page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
            }`}
            disabled={page === 1}>Prev</button>
          {[...Array(Math.ceil(products.length / 10))].map((_, i) => (
            <button
              key={i}
              onClick={() => setPageHandler(i + 1)}
              className={`mx-2 px-4 py-2 border rounded ${
                i + 1 === page ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
              }`}>{i + 1}</button>
          ))}
          <button
            onClick={() => setPage(page + 1)}
            className={`px-4 py-2 border rounded ${
              page =Math.ceil(products.length / 10) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
            }`}
            disabled={page === Math.ceil(products.length / 10)}>Next</button>
        </div>
      )}
    </div>
  );
};

export default App;
