import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes,Route } from 'react-router-dom'
import HomePage from './17_Pages/Home'
import EditPage from './17_Pages/Edit'

function App() {
  return (
    <div className='App'>
        <h1>Meme Generator</h1>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/edit/" element={<EditPage />} />
        </Routes>
    </div>
  )
}

export default App