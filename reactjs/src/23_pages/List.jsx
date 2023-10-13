import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ListingPage = () => {
    const [name , setName ] = useState('');
    const [isbnNumber,setIsbnNumber]=useState('');
    const [price,setPrice]=useState('');
    const [coverPic,setCoverPic]=useState('');
  return (
    <div>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Book Name</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Book Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>isbnNumber</Form.Label>
          <Form.Control onChange={(e) => setIsbnNumber(e.target.value)} type="text" placeholder="Type isbnNumber" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Type Price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>CoverPic</Form.Label>
          <Form.Control onChange={(e) => setCoverPic(e.target.file[0])} type="file" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Listing
        </Button>
      </Form>
    </div>
  )
}

export default ListingPage