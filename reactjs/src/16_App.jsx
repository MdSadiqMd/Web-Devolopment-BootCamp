import React, { useEffect, useState } from 'react';
import { getPosts } from './index';

function App() {
  const [data,setData]=useState(null);

  useEffect(()=>{
    getPosts().then((posts)=>console.log(posts))
  },[]);

  return (
    <div className='App'>
        {
            data ? data.map((e)=><li>{e.title}</li>) :<p>No data</p>
        }
    </div>
  )
}

export default App