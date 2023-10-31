import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import Products from './components/Products';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
