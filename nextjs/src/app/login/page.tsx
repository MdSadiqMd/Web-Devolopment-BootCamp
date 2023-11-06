import React from 'react'

// ***In app directory we need to create a folder for every page and a file with name of "page.tsx" only then the nextJS will create that page without neccessarly us needed to create route for that page
// If we give any name other than page.tsx tha app crashes
// Don't Need to bother about routes this page inside app will automatically create a route no manually route creating steps required
const LoginPage = () => {
  return (
    <div>
        <h1>Login</h1>
    </div>
  )
}

export default LoginPage