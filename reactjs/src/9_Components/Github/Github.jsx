import React, { useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(() => {
      fetch('https://github.api.com/users/mdsadiqmd')
      .then(Response => Response.json())
      .then(data =>{
        console.log(data);
        setData(data)
      })
    }, [])
    
  return (
    <div>Githubvfollowers :{data.followers}</div>
  )
}

export default Github