import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./CheckoutForm.css";

// order details
import { useParams } from "react-router";
// end order details

const CheckoutForm = ({ order }) => {
  // order details
  const { id } = useParams();
  // const [order, setOrder] = useState([]);
  const addressRef = useRef();
  const phoneRef = useRef();
  const { price, _id } = order;
  const aPrice = order.price;
  const { user, isLoading } = useAuth();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [process, setProcess] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://drone-store-server.onrender.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcess(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentMethod);
    }
    console.log({ success });
    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your payment processed successfully");
      console.log(paymentIntent);
      setProcess(false);
      // save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
      };
      const url = `https://drone-store-server.onrender.com/orders/${_id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div className="ms-4 me-4">
      {/* <p>{orderSuccess}</p> */}
      <Form onSubmit={handlePayment}>
        {/* {!isLoading && (
          // <Form className="mx-1 mx-md-4">
          <>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              value={user.displayName || ""}
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
              value={"$" + order.price}
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

            <br />
          </>
        )} */}

        <CardElement
          options={{
            style: {
              border: "2px solid black",
              base: {
                fontSize: "16px",
                color: "#424770",
                border: "2px solid black",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              marginLeft: "40px",
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {process ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <div className="fancy-btn">
            <button type="submit" className="" disabled={!stripe || success}>
              Pay ${price}
            </button>
          </div>
        )}
      </Form>
      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">{success}</p>}
    </div>
  );
};

export default CheckoutForm;

/*
1. install stripe and stripe-react 
2. set publishable key 
3. Elements
4. CheckoutForm
----------------------------------------------------------------
5. Create payment method
6. server create payment intent api
7. load client secret 
8. confirm card payment 
9. handle user error
*/
