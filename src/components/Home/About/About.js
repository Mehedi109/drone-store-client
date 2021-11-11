import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

const About = () => {
  return (
    <div className="mt-5 mb-5">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <h2>About Us</h2>
            <p style={{ textAlign: 'start' }}>
              Welcome to drone store.Drone store is a drone selling website
              where you can buy different types of drone and every drone is good
              performing it's service.There is total 15 types of drones
              available now and if you need another different drone outside of
              those 15 you can inform us we will try to manage it for you <br />
              <Button
                variant="primary"
                style={{
                  textAlign: 'start',
                  marginRight: '400px',
                  marginTop: '40px',
                }}
              >
                Shop Now
              </Button>
            </p>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img
              className="img-fluid"
              src="https://i.ibb.co/cLFDpgm/photo-1507724571015-2a7d95884528-ixlib-rb-1-2.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
