import React, { useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../images/drone-1.jpg";
import img2 from "../../../images/drone-2.jpg";
import img3 from "../../../images/drone-3.jpeg";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="" style={{ marginBottom: "px", marginTop: "20px" }}>
      <Container>
        <Row>
          <Col
            xs={12}
            md={6}
            lg={6}
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h3 className="mt-3">About Us</h3>
            <p style={{ textAlign: "start" }}>
              Welcome to drone store.Drone store is a drone selling website
              where you can buy different types of drone and every drone is good
              performing it's service.There is total 15 types of drones
              available now and if you need another different drone outside of
              those 15 you can inform us we will try to manage it for you <br />
              <Link to="/allProducts">
                <Button
                  variant="primary"
                  style={{
                    marginTop: "40px",
                  }}
                >
                  Shop Now
                </Button>
              </Link>
            </p>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={6}
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img
              className="img-fluid"
              // src="https://i.ibb.co/cLFDpgm/photo-1507724571015-2a7d95884528-ixlib-rb-1-2.jpg"
              src={img2}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
