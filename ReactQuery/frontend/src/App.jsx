import React, { useState } from 'react'
import axios from 'axios';

const App = () => {
    const [products,setProducts]=useState([]);
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);

    // We shouldn't use async await like this in axios or even in react as it is a hook
    /*useEffect(async()=>{
        const res=await axios.get('/api/products')
    },[])*/

    // To use Async Await we use IIFE
    // For safety Purpose we use Semicolon before IIFE to deferentiate
    useEffect(()=>{
        try {
            ;(async()=>{
                setLoading(true)
                setError(false)
                const response=await axios.get('/api/products')
                console.log(response.data)
                setProducts(response.data)
                setLoading(false)
            })()
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    },[])
    if(error){
        return <h1>Something Went Wrong</h1>
    } 
    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <h1>Hello World</h1>
        <h2>Number of Products are {products.length}</h2>
    </div>
  )
}

export default App