import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './23_pages/Register';
import LoginPage from './23_pages/Login';
import MyNavbar from './23_Components/Navbar';
import ListingPage from './23_pages/List';
import HomePage from './23_pages/Home';
import BookDetailPage from './23_pages/Details';
import OrdersPage from './23_pages/ViewOrder';
import ViewOrderDetails from './23_pages/ViewOrderDetails';


function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/book/list' element={<ListingPage />} />
        <Route path="/book/view/:bookId" element={<BookDetailPage />} />
        <Route path="/book/orders" element={<OrdersPage />} />
        <Route path="/books/orders/:bookId" element={<ViewOrderDetails />} />
      </Routes>
    </div>
  )
}

export default App;
