import React, { useEffect, useState, useRef } from 'react';
import { Col, Container, Form, Row, Spinner, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Details.css';

const Details = () => {
  const { user, isLoading } = useAuth();

  const { id } = useParams();
  const [order, setOrder] = useState([]);

  const addressRef = useRef();
  const phoneRef = useRef();

  useEffect(() => {
    const url = `https://afternoon-wave-35884.herokuapp.com/drones/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const handleOrder = (e) => {
    const userName = user.displayName;
    const email = user.email;
    const productName = order.name;
    const price = order.price;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    console.log(address);
    console.log(order.price);
    const newOrder = {
      name: userName,
      email: email,
      product: productName,
      price: price,
      address: address,
      phone: phone,
      status: 'pending',
    };
    fetch('https://afternoon-wave-35884.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Booked Successfully');
      });
    e.preventDefault();
  };
  return (
    <>
      <Header></Header>
      <Container>
        <div className="mt-5">
          <Row>
            <div>
              <img className="img-fluid" src={order.img} alt="" />
              <h4>{order.name}</h4>
              <p>{order.description}</p>
            </div>
          </Row>
        </div>
        <Row>
          <Col xs={6} md={6} lg={12} className="mx-auto w-100">
            <div className="mx-auto w-100">
              <h5 className="mt-5 mb-3">
                Hey, {user.displayName} your total amount is ${order.price}
              </h5>
              <h4>Confirm Your Order Now</h4>
              <div className="booking-form">
                {!isLoading && (
                  <Form className="mx-1 mx-md-4" onSubmit={handleOrder}>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name"
                      value={user.displayName || ''}
                      className="mb-4"
                    />
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      value={user.email}
                      name="email"
                      className="mb-4"
                    />
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name"
                      name="productName"
                      value={order.name}
                      className="mb-4"
                    />
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name"
                      name="price"
                      value={'$' + order.price}
                      className="mb-4"
                    />
                    <Form.Control
                      type="text"
                      placeholder="Your Address"
                      name="address"
                      ref={addressRef}
                      className="mb-4"
                    />
                    <Form.Control
                      type="text"
                      placeholder="Your Phone Number"
                      name="phone"
                      ref={phoneRef}
                      className="mb-3"
                    />
                    <Button
                      type="submit"
                      variant="success"
                      style={{
                        marginRight: '',
                        marginBottom: '20px',
                      }}
                    >
                      Place Order
                    </Button>{' '}
                    <br />
                  </Form>
                )}
                {isLoading && (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Details;
