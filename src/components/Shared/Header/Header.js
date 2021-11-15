import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        style={{ backgroundColor: '#0D4C91' }}
        bg=""
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ color: 'white', fontWeight: '600' }}
          >
            Drone<span className="text-warning">Store</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" menu">
              <Nav.Link as={Link} to="/home" className="text-warning">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/allProducts" className="text-warning">
                MoreProducts
              </Nav.Link>
              {user?.email ? (
                <>
                  <Nav.Link as={Link} to="/dashboard" className="text-warning">
                    Dashboard
                  </Nav.Link>
                  <Button className="logout-btn" onClick={logOut}>
                    Logout
                  </Button>
                </>
              ) : (
                <Nav.Link as={Link} to="/login" className="text-warning">
                  Login
                </Nav.Link>
              )}
              <Navbar.Text className="text-warning fw-bold user">
                {user.displayName}
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
