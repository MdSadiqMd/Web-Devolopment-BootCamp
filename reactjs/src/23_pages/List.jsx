import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../23_Context/Firebase'; 

const ListingPage = () => {
  const [name, setName] = useState('');
  const [isbnNumber, setIsbnNumber] = useState('');
  const [price, setPrice] = useState('');
  const [coverPic, setCoverPic] = useState(null);

  const { handleCreateNewListing } = useFirebase(); // Use the handleCreateNewListing function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleCreateNewListing(name, isbnNumber, price, coverPic);
    } catch (error) {
      console.error('Error creating a new listing:', error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>ISBN Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type ISBN Number"
            value={isbnNumber}
            onChange={(e) => setIsbnNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Type Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>CoverPic</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setCoverPic(e.target.files[0])}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Listing
        </Button>
      </Form>
    </div>
  );
};

export default ListingPage;
