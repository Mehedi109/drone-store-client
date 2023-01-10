import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import useAuth from "../../../hooks/useAuth";
import userImg from "../../../images/user.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Reviews.css";

import { Component } from "react";
import Slider from "react-slick";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useAuth();

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          button: 0,
        },
      },
    ],
  };

  useEffect(() => {
    fetch("https://drone-store-server.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="reviews-section">
      <Container>
        <h3
          className="mt-5 mb-5"
          style={{ color: "#5B54F1", fontFamily: "Libre Baskerville serif" }}
        >
          User Reviews
        </h3>

        <Slider {...settings} className="g-4 mb-5 reviews">
          {/* <Slider {...settings}> */}
          {reviews.map((review) => (
            <Col sm={12} md={6} lg={4} className="p-3">
              {/* <Slider {...settings}> */}
              <div
                className="card p-3 text-center px-4 review-shadow review"
                style={{ height: "" }}
                // data-aos="fade-up"
                // data-aos-duration="1500"
              >
                <div className="user-content">
                  <img
                    src={userImg}
                    width="100"
                    alt=""
                    style={{ position: "relative", left: "33%" }}
                  />
                  <h5 className="">{review.userName}</h5>{" "}
                  <h6 className="">{review.email}</h6>{" "}
                  <p>{review.description}</p>
                </div>
                <Rating
                  className="text-danger d-block"
                  initialRating={review.rating}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                ></Rating>
              </div>
              {/* </Slider> */}
            </Col>
          ))}
          {/* </Slider> */}
        </Slider>
      </Container>
    </div>
  );
};

export default Reviews;
