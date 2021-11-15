import React, { useEffect } from 'react';
import { Col, Row, Button, Card } from 'react-bootstrap';
import { Link, useParams, useHistory } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = ({ product }) => {
  const { _id, name, img, price, description } = product;
  const history = useHistory();

  const url = `/order/${_id}`;
  const handlePurchase = () => {
    history.push(url);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Col sm={12} md={6} lg={4}>
      <div>
        <Card
          style={{ border: '', height: '' }}
          className=""
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Card.Img variant="top" src={img} style={{ height: '200px' }} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description.slice(0, 100)}...</Card.Text>
            <Card.Title>${price}</Card.Title>
          </Card.Body>
          <small>
            <Button onClick={handlePurchase} variant="success" className="mb-3">
              Purchase Now
            </Button>
          </small>
        </Card>
      </div>
    </Col>
  );
};

export default Product;
