import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        // style={{ backgroundColor: "#0D4C91" }}
        style={{ backgroundColor: "#F8F9FA" }}
        bg=""
        expand="lg"
        fixed="top"
        className="header"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ color: "black", fontWeight: "600" }}
          >
            Drone<span className="text-danger">Store</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" menu">
              {user?.email ? (
                <div className="login-menu">
                  <Nav.Link as={Link} to="/home" className="text-dark">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/allProducts" className="text-dark">
                    MoreProducts
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard" className="text-dark">
                    Dashboard
                  </Nav.Link>
                  <Navbar.Text className="text-warning fw-bold user">
                    {user.displayName}
                  </Navbar.Text>{" "}
                  <br />
                  <Button className="logout-btn" onClick={logOut}>
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="logout-menu">
                  <Nav.Link as={Link} to="/home" className="text-warning">
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/allProducts"
                    className="text-warning"
                  >
                    MoreProducts
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login" className="text-warning">
                    Login
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
