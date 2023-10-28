import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  // We shouldn't use async await like this in axios or even in react as it is a hook
  /*useEffect(async () => {
      const res = await axios.get('/api/products')
  }, [])*/

  // To use Async Await we use IIFE
  // For safety Purpose we use Semicolon before IIFE to differentiate
  /*useEffect(() => {
      try {
          ;(async () => {
              setLoading(true);
              setError(false);
              const response = await axios.get('/api/products');
              console.log(response.data);
              setProducts(response.data);
              setLoading(false);
          })()
      } catch (error) {
          setError(true);
          setLoading(false);
      }
  }, [])*/
  //(or)
  useEffect(() => {
    // To Decrease the Fetching of the api
    const controller=new AbortController();
    ;(async () => {
      const response = await axios.get('/api/products?search=' + search,{
        signal:controller.signal
      });
      console.log(response.data);
      setProducts(response.data);
    })();

    //cleanup
    return()=>{
        controller.abort();
    }
  }, [search]);

  return (
    <div>
      <h1>Hello World</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <h2>Number of Products are {products.length}</h2>
    </div>
  );
};

export default App;
