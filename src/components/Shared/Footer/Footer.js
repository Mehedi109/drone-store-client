import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section
        className="d-flex justify-content-between p-4 text-white"
        style={{ backgroundColor: "#21D192" }}
      >
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="/#" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/#" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/#" class="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="/#" className="text-white me-4">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="/#" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/#" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <div style={{ backgroundColor: "#1F2533", color: "white" }}>
        <Container>
          <Row className="">
            <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4 mt-5">
              <h6 class="text-uppercase fw-bold">Drone Store</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                Drone Store is a drone selling website where you can buy
                different type of drone as your choice
              </p>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 mx-auto  mb-5 mt-5">
              <h6 class="text-uppercase fw-bold">Links</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <Nav.Link to="/home">Home</Nav.Link>
              <Nav.Link to="/home">About</Nav.Link>
              <Nav.Link to="/home">Dashboard</Nav.Link>
              <Nav.Link to="/home">Logout</Nav.Link>
            </div>

            {/* Contact  */}
            <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-5 mt-5">
              <h6 class="text-uppercase fw-bold">Contact</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <i class="fas fa-home mr-3"></i> Central Road, Moulvibazar 3200
              </p>
              <p>
                <i class="fas fa-envelope mr-3"></i> info@drone-store.com
              </p>
              <p>
                <i class="fas fa-phone mr-3"></i> + 8801310707070
              </p>
              <p>
                <i class="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
