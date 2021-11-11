import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      {/* <Container> */}
      {/* <Row> */}
      <div className="banner mb-2">
        {/* <Row> */}
        <Col sm={12} md={12} lg={12}>
          <img
            src="https://i.ibb.co/7rdrZhM/3d-drone-flying-sunset-sea-1048-12782.jpg"
            alt=""
          />
        </Col>
        {/* </Row> */}
      </div>
      {/* </Row> */}
      {/* </Container> */}
    </div>
  );
};

export default Banner;
