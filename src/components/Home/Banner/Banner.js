import React, { Component } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import img1 from "../../../images/drone-1.jpg";
import img2 from "../../../images/drone-2.jpg";
import img3 from "../../../images/drone-3.jpeg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            // src="https://i.ibb.co/7rdrZhM/3d-drone-flying-sunset-sea-1048-12782.jpg"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="mb-5">
              Drone store is a drone selling website in online with varoius
              model of drones.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="https://i.ibb.co/fx4BLrr/photo-1623041997614-064bb5b95af6-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb.jpg"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="mb-5">
              Customers satisfaction is our first priority
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="https://i.ibb.co/KqkrFpv/photo-1515849430397-7aee921bbea1-ixlib-rb-1-2.jpg"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="mb-5">
              Come to us and buy your desired drone from us
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
