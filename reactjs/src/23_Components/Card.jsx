import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
import { useFirebase } from '../23_Context/Firebase';

function BookCard(props) {
    const Firebase=useFirebase();
    const [url,setURL]=useState(null);
    useEffect(()=>{
        Firebase.getImageURL(props.imageURL).then((url)=>setURL(url))
    })

    const Navigate=useNavigate();
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            Lorem ipsum,{props.name} dolor sit amet consectetur adipisicing{props.diaplayName}.
            Lorem ipsum dolor sit {props.price} amet.
        </Card.Text>
        <Button onClick={(e)=>Navigate('/book/view/${props.id}')} variant="primary">View</Button>
      </Card.Body>
    </Card>
  )
}

export default BookCard