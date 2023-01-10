import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Form, Row, Spinner, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./Details.css";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useHistory } from "react-router-dom";
import Payment from "../Payment/Payment";

// payment related concept
const stripePromise = loadStripe(
  "pk_test_51I3MhVD7PjyNJImR8ksiRSe5zCH2KO6WmrHyNjicVL4g0qpLt81vLVefSZ6cPZquslEcqtLTngFTt5r6VcNC9ZsB00sy3eBJJ2"
);

const Details = () => {
  const { user, isLoading } = useAuth();

  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [orderSuccess, setOrderSuccess] = useState("");

  const addressRef = useRef();
  const phoneRef = useRef();
  const history = useHistory();

  useEffect(() => {
    const url = `https://drone-store-server.onrender.com/drones/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const handleOrder = (e) => {
    setOrderSuccess("successful");
    console.log({ orderSuccess });
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
      status: "pending",
    };

    const orderUrl = `/payment/${id}`;
    fetch("https://drone-store-server.onrender.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        // alert("Booked Successfully");
        setOrderSuccess("successful");
        console.log(orderSuccess);
        history.push(orderUrl);
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
                      value={user.displayName || ""}
                      className="mb-4"
                      required
                    />
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      value={user.email}
                      name="email"
                      className="mb-4"
                      required
                    />
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name"
                      name="productName"
                      value={order.name}
                      className="mb-4"
                      required
                    />
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name"
                      name="price"
                      value={"$" + order.price}
                      className="mb-4"
                      required
                    />
                    <Form.Control
                      type="text"
                      placeholder="Your Address"
                      name="address"
                      ref={addressRef}
                      className="mb-4"
                      required
                    />
                    <Form.Control
                      type="text"
                      placeholder="Your Phone Number"
                      name="phone"
                      ref={phoneRef}
                      className="mb-3"
                      required
                    />
                    <Button
                      type="submit"
                      variant="success"
                      style={{
                        marginRight: "",
                        marginBottom: "20px",
                      }}
                    >
                      Place Order
                    </Button>{" "}
                    <br />
                  </Form>
                )}
                {/* payment related concept */}
                {/* {order?.price && (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} orderSuccess={orderSuccess} />
                  </Elements>
                )} */}
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
