import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct/AddProduct';
import './Dashboard.css';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';

const Dashboard = () => {
  return (
    <Container fluid>
      <div>
        <div className="">
          <Row>
            <Col xs={12} md={6} lg={2}>
              <div className="sidebar">
                {/* sidebar */}
                {/* <ul
                  class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                  id="accordionSidebar"
                >
                  <a
                    class="sidebar-brand d-flex align-items-center justify-content-center"
                    href="index.html"
                  >
                    <div class="sidebar-brand-icon rotate-n-15">
                      <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">
                      SB Admin <sup>2</sup>
                    </div>
                  </a>
                  <hr class="sidebar-divider my-0" />

                  <li class="nav-item active">
                    <a class="nav-link" href="index.html">
                      <i class="fas fa-fw fa-tachometer-alt"></i>
                      <span>Dashboard</span>
                    </a>
                  </li>
                </ul> */}
                <Navbar bg="" expand="lg">
                  {/* <Container> */}
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      {/* <Nav.Link href="#home">Home</Nav.Link> */}
                      {/* <Nav.Link href="#link">Link</Nav.Link> */}
                      <ul>
                        <li>
                          <Nav.Link style={{ color: 'white' }} href="#home">
                            My Orders
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link style={{ color: 'white' }} href="#home">
                            Manage Orders
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link style={{ color: 'white' }} href="#home">
                            Review
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link style={{ color: 'white' }} as={Link} to="/">
                            Home
                          </Nav.Link>
                        </li>
                      </ul>
                    </Nav>
                  </Navbar.Collapse>
                  {/* </Container> */}
                </Navbar>
              </div>
            </Col>
            <Col xs={12} md={6} lg={10}>
              <ManageOrders></ManageOrders>
              <AddProduct></AddProduct>
              <ManageProducts></ManageProducts>
              <MyOrders></MyOrders>
              <Payment></Payment>
            </Col>
          </Row>
        </div>
      </div>
      {/* </Row> */}
    </Container>
    // <Row>
    //   <Col xs={12} md={8}>
    //     xs=12 md=8
    //   </Col>
    //   <Col xs={6} md={4}>
    //     xs=6 md=4
    //   </Col>
    // </Row>
  );
};

export default Dashboard;
