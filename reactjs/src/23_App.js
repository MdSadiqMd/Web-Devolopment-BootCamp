import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route } from 'react-router-dom';
import RegisterPage from './23_pages/Register';
import LoginPage from './23_pages/Login';
import myNavbar from './23_Components/Navbar';
import ListingPage from './23_pages/List';

function App() {
  return (
    <div>
      <myNavbar />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/book/list' element={<ListingPage />} />
      </Routes>
    </div>
  )
}

export default App