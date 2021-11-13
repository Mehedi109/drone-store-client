import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const AddProduct = () => {
  //     const { name, time } = booking;
  //   const { user } = useAuth();
  const initialInfo = {
    img: '',
    name: '',
    description: '',
    price: '',
  };
  const [productInfo, setProductInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...productInfo };
    newInfo[field] = value;
    setProductInfo(newInfo);
  };

  const handleAddProduct = (e) => {
    // collect data
    const addProduct = {
      ...productInfo,
      //   time,
      //   serviceName: name,
      //   date: date.toLocaleDateString(),
    };
    // send to the server
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Added Successfully');
        e.target.reset();
      });

    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Form className="mx-1 mx-md-4" onSubmit={handleAddProduct}>
              <Form.Control
                type="text"
                placeholder="Image Url"
                name="img"
                onBlur={handleOnBlur}
                className="mb-4"
              />
              <Form.Control
                type="text"
                placeholder="Product Name"
                name="name"
                onBlur={handleOnBlur}
                className="mb-4"
              />
              <Form.Control
                type="text"
                placeholder="Price"
                name="price"
                onBlur={handleOnBlur}
                className="mb-4"
              />
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Description"
                name="description"
                onBlur={handleOnBlur}
                className="mb-4"
              />
              {/* <Form.Control as="textarea" rows={3} /> */}
              <Button
                type="submit"
                variant="success"
                style={{
                  marginRight: '330px',
                  marginBottom: '20px',
                }}
              >
                Place Order
              </Button>{' '}
              <br />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProduct;
