import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch('https://afternoon-wave-35884.herokuapp.com/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-5">User Reviews</h3>
        <Row className="g-4 mb-5">
          {reviews.map((review) => (
            <Col sm={12} md={6} lg={4}>
              <div
                className="card p-3 text-center px-4"
                style={{ height: '' }}
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="user-content">
                  <h5 className="">{review.userName}</h5>{' '}
                  <h6 className="">{review.email}</h6>{' '}
                  <p>{review.description}</p>
                </div>
                <Rating
                  className="text-danger"
                  initialRating={review.rating}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                ></Rating>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
