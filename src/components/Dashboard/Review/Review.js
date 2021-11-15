import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Review.css';

const Review = () => {
  const { user } = useAuth();
  const initialInfo = {
    userName: user.displayName,
    email: user.email,
    rating: '',
    review: '',
  };

  const [reviewInfo, setReviewInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...reviewInfo };
    newInfo[field] = value;
    setReviewInfo(newInfo);
  };

  const handleAddProduct = (e) => {
    // collect data
    const addReview = {
      ...reviewInfo,
    };
    // send to the server
    fetch('https://afternoon-wave-35884.herokuapp.com/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Posted Successfully');
        e.target.reset();
      });
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <h4 className="mt-4">Post A Review</h4>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Form className="mx-auto review-form" onSubmit={handleAddProduct}>
              <Form.Control
                type="text"
                placeholder="Name"
                name="userName"
                value={user.displayName}
                className="mb-4"
              />
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={user.email}
                onBlur={handleOnBlur}
                className="mb-4"
              />
              <Form.Control
                type="text"
                placeholder="Write a number between 1 to 5 for Rating"
                name="rating"
                onBlur={handleOnBlur}
                className="mb-4"
              />
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Review"
                name="description"
                onBlur={handleOnBlur}
                className="mb-4"
              />
              <Button
                type="submit"
                variant="success"
                style={{
                  marginBottom: '20px',
                }}
              >
                Post
              </Button>{' '}
              <br />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Review;
