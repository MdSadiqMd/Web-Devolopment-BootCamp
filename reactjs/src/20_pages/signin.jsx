import React from 'react'

function Signin() {
  return (
    <div className="signinPage">
    <h1>Sign In</h1>
    <h1>Signin Page</h1>
    <label htmlFor="email">Email</label>
    <input type="email" required placeholder="Enter your email" />
    <label htmlFor="password">Password</label>
    <input type="password" required placeholder="Enter your Password" />
    <button onClick={createUser}>Sign In</button>
    </div>
  )
}

export default Signin