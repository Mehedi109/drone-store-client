import React, { useEffect, useState, useRef } from 'react';
import { Col, Container, Form, Row, Spinner, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Details = () => {
  const { user, isLoading } = useAuth();

  const { id } = useParams();
  const [order, setOrder] = useState([]);

  const addressRef = useRef();
  const phoneRef = useRef();

  // const userName = user.displayName;

  // const initialInfo = {
  //   name: userName,
  //   // userName: user.displayName,
  //   email: user.email,
  //   phone: '',
  // };
  // const [bookingInfo, setBookingInfo] = useState(initialInfo);

  // const handleOnBlur = (e) => {
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   const newInfo = { ...bookingInfo };
  //   newInfo[field] = value;
  //   setBookingInfo(newInfo);
  // };

  useEffect(() => {
    const url = `https://afternoon-wave-35884.herokuapp.com/drones/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  // const initialInfo = {
  //   // userName: user.displayName,
  //   email: user.email,
  //   phone: '',
  //   address: '',
  //   price: order.price,
  //   productName: order.name,
  // };

  // const [orderInfo, setOrderInfo] = useState(initialInfo);

  // const handleOnBlur = (e) => {
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   console.log(field, value);
  //   const newOrderData = { ...orderInfo };
  //   newOrderData[field] = value;
  //   setOrderInfo(newOrderData);
  // };

  const handleOrder = (e) => {
    // const order = { ...bookingInfo };
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
      // status: status,
    };
    // const userName = user.displayName;
    // const order = { name: userName };
    fetch('http://localhost:5000/orders', {
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
    // <div>
    // <h2>Details</h2>
    <Container>
      <div>
        <Row>
          <div>
            <img className="img-fluid" src={order.img} alt="" />
            <h4>{order.name}</h4>
            <p>{order.description}</p>
            <h3>{order.price}</h3>
          </div>
        </Row>
      </div>
      {/* <Row> */}
      {/* <Col xs={12} md={12} lg={12}> */}
      <div className="mx-auto w-100">
        <h2 className="mt-3 mb-5">
          Hey, {user.displayName} Confirm Your Order
        </h2>

        <div>
          {!isLoading && (
            <Form className="mx-1 mx-md-4" onSubmit={handleOrder}>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                // name="name"
                value={user.displayName || ''}
                className="mb-4"
              />
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                value={user.email}
                name="email"
                // onBlur={handleOnBlur}
                className="mb-4"
              />
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                name="productName"
                value={order.name}
                // onBlur={handleOnBlur}
                className="mb-4"
              />
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                name="price"
                value={order.price}
                // onBlur={handleOnBlur}
                className="mb-4"
              />
              <Form.Control
                type="text"
                placeholder="Your Address"
                name="address"
                ref={addressRef}
                // value={'Address'}
                // onBlur={handleOnBlur}
                className="mb-4"
              />
              <Form.Control
                type="text"
                placeholder="Your Phone Number"
                name="phone"
                ref={phoneRef}
                // value={'Phone'}
                // onBlur={handleOnBlur}
                className="mb-3"
              />
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
          )}
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>
      </div>
      {/* </Col> */}
      {/* </Row> */}
    </Container>
    // </div>
  );
};

export default Details;
