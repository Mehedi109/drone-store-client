import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import useAuth from "../../../hooks/useAuth";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Alert, Container, Spinner } from "react-bootstrap";
import "./Payment.css";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

// payment related concept
const stripePromise = loadStripe(
  "pk_test_51I3MhVD7PjyNJImR8ksiRSe5zCH2KO6WmrHyNjicVL4g0qpLt81vLVefSZ6cPZquslEcqtLTngFTt5r6VcNC9ZsB00sy3eBJJ2"
);

const Payment = ({ orderSuccess }) => {
  const { user, isLoading } = useAuth();

  const { id } = useParams();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const url = `https://drone-store-server.onrender.com/drones/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  return (
    <>
      <Header></Header>

      <Container className="payment">
        <div className="payment-form">
          {orderSuccess}
          {/* payment related concept */}
          {/* <h3 className="mb-5">Order Placed Successfully</h3> */}
          <h4 className="mb-5">Please make payment to confirm your order</h4>
          {order?.price && (
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          )}
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Payment;
