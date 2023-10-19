import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFirebase } from '../23_Context/Firebase';

function BookCard(props) {
    const Firebase=useFirebase();
    const [url,setURL]=useState(null);
    useEffect(()=>{
        Firebase.getImageURl(props.imageURL).then((url)=>setURL(url))
    })
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            Lorem ipsum,{props.name} dolor sit amet consectetur adipisicing{props.diaplayName}.
            Lorem ipsum dolor sit {props.price} amet.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default BookCard