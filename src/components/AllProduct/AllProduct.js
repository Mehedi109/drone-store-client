import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const AllProduct = ({ product }) => {
  const { _id, img, name, price, description } = product;

  const history = useHistory();

  const url = `/order/${_id}`;
  const handlePurchase = () => {
    history.push(url);
  };
  return (
    <Col sm={12} md={6} lg={4}>
      <div>
        <Card style={{ border: 'none', height: '' }} className="p-3">
          <Card.Img variant="top" src={img} style={{ height: '400px' }} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description.slice(0, 100)}...</Card.Text>
            <Card.Title>${price}</Card.Title>
          </Card.Body>
          <Button onClick={handlePurchase} variant="success">
            Purchase Now
          </Button>
        </Card>
      </div>
    </Col>
  );
};

export default AllProduct;
