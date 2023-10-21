import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { useFirebase } from '../23_Context/Firebase';
import Form from 'react-bootstrap/Form';

function DetailsPage() {
    const params = useParams();
    const firebase = useFirebase();
    const [data, setData] = useState(null);
    const [url, setURL] = useState(null);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        // Fetch book details when the component mounts
        firebase.getBookById(params.bookId).then((value) => {
            setData(value.data());
        })
    }, [params.bookId,firebase]);

    useEffect(() => {
        if (data) {
            const imageURL = data.imageURL;
            firebase.getImageURL(imageURL).then((url) => {
                setURL(url);
            })
        }
    }, [data,firebase]); 

    if (data == null) {
        return (
            <h1>Loading...</h1>
        );
    }

    const placeOrder = async () => {
        return await firebase.placeOrder(params.bookId, qty); 
    };

    return (
        <div className="container mt-5">
            <h1>{data.name}</h1>
            <img src={url} width="500px" style={{ borderRadius: "10px" }} alt="Book Cover" />
            <h1>Details</h1>
            <p>Price: Rs.{data.price}</p>
            <p>ISBN Number: {data.isbn} </p>
            <p>Owner Details</p>
            <p>Name: {data.displayName} </p>
            <p>Email: {data.userEmail} </p>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quantity</Form.Label>
                <Form.Control onChange={(e) => setQty(e.target.value)} type="number" placeholder="Enter Qty" />
            </Form.Group>
            <Button onClick={placeOrder} variant='success'>Buy Now</Button>
        </div>
    );
}

export default DetailsPage;
