import React, { useEffect, useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [page,setpage]=useState(1);

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
          {products.slice(page*10-10/*This is logic to show 10 products sub 1,2,3,.. in page variable */ ,page*10).map((prod) => (
            <div key={prod.id} className='p-4'>
              <img src={prod.thumbnail} alt={prod.title} className='w-400 h-400' />
              <span className='block mt-2'>{prod.title}</span>
            </div>
          ))}
        </div>
      )}
      {products.length>0 && (
        <div>
            <span>Prev</span>
            {[...Array(products.length/10)].map((_,i)=>{
                return <span onClick={()=>setPageHandler()} key={i}>{i+1}</span>
            })}
            <span>Next</span>
        </div>
      )}
    </div>
  );
};

export default App;
