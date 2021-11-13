import React from 'react';
import { Col, Row, Button, Card } from 'react-bootstrap';
import { Link, useParams, useHistory } from 'react-router';

const Product = ({ product }) => {
  const { _id, name, img, price, description } = product;
  const history = useHistory();

  const url = `/order/${_id}`;
  // console.log(url);
  // history.push(url);
  const handlePurchase = () => {
    history.push(url);
  };

  return (
    <Col sm={12} md={6} lg={4}>
      <div>
        {/* <img src={img} className="w-100" alt="" />
        <h5>{name}</h5>
        <h6>{price}</h6>
        <p>{description}</p>
        <Button variant="success">Purchase Now</Button> */}
        <Card style={{ border: 'none', height: '' }} className="p-3">
          <Card.Img variant="top" src={img} style={{ height: '400px' }} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description.slice(0, 100)}...</Card.Text>
            <Card.Title>${price}</Card.Title>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">
              <Button variant="success">Purchase Now</Button>
            </small>
          </Card.Footer> */}
          {/* <Link to=""> */}
          <Button onClick={handlePurchase} variant="success">
            Purchase Now
          </Button>
          {/* </Link> */}
        </Card>
      </div>
    </Col>
  );
};

export default Product;
