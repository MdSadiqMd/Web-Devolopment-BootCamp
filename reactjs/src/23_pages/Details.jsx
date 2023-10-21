import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button';
import { useFirebase } from '../23_Context/Firebase';
import { useEffect } from 'react';

function detailsPage() {
    const params=useParams();
    const firebase=useFirebase();
    const [data,setData]=useState(null);
    const [url,setURL]=useState(null);

    useEffect(()=>{
        firebase.getBookById(params.bookId).then((value)=>{
            setData(value.data());
        })
    },[]);
    useEffect(()=>{
        if(data){
            const imageURL=data.imageURL;
            firebase.getImageURL(imageURL).then((url)=>{
                setURL(url);
            })
        }
    })
    if(data==null){
        return(
            <h1>Loading...</h1>
        )
    }
  return (
    <div className="conatiner mt-5">
        <h1>{data.name}</h1>
        <img src={url} width="500px" style={{borderRadius:"10px"}} />
        <h1>Details</h1>
        <p>Price: Rs.{data.price}</p>
        <p>ISBN Number: {data.isbn} </p>
        <p>Owner Details</p>
        <p>Name: {data.displayName} </p>
        <p>Email: {data.userEmail} </p>
        <Button variant='success'>Buy Now</Button>
    </div>
  )
}

export default detailsPage