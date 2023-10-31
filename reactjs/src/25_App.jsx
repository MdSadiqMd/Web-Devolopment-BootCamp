import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route, Outlet } from 'react-router-dom';
import Home from './25_pages/Home';
import Profile from './25_pages/Profile';
import NavigationButtons from './25_context/NavigationButtons';

function App() {
  return (
    <Router>
      <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-4">React Router v6 Example</h1>

        <NavigationButtons />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
