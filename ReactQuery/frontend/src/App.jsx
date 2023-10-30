import React from 'react'
import {Link} from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1>React Query</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
      </div>
    </>
  )
}

export default App