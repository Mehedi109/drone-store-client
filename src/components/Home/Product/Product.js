import React from 'react';
import { Col, Row, Button, Card } from 'react-bootstrap';

const Product = ({ product }) => {
  const { name, img, price, description } = product;
  return (
    <Col sm={12} md={6} lg={4}>
      <div>
        {/* <img src={img} className="w-100" alt="" />
        <h5>{name}</h5>
        <h6>{price}</h6>
        <p>{description}</p>
        <Button variant="success">Purchase Now</Button> */}
        <Card style={{ border: 'none' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">
              <Button variant="success">Purchase Now</Button>
            </small>
          </Card.Footer> */}
          <Button variant="success">Purchase Now</Button>
        </Card>
      </div>
    </Col>
  );
};

export default Product;
