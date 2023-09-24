import React, { useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(() => {
      fetch('https://github.api.com/users/mdsadiqmd')
      .then(Response => Response.json())
      .then(data =>{})
    }, [])
    
  return (
    <div>Github</div>
  )
}

export default Github