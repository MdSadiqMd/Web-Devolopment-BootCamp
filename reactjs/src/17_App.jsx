import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes,Route } from 'react-router-dom'
import HomePage from './17_Pages/Home'

function App() {
  return (
    <div className='App'>
        <h1>Meme Generator</h1>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </div>
  )
}

export default App