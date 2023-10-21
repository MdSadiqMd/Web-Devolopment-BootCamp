import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
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
    <div className="conatiner">
        
    </div>
  )
}

export default detailsPage