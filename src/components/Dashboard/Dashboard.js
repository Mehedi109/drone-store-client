import React from 'react';
import { Col, Container, Nav, Navbar, Row, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddProduct from './AddProduct/AddProduct';
import './Dashboard.css';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import Review from './Review/Review';

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <Container fluid>
      {/* <Link to="/appointment">
        <Button color="inherit">Appointment</Button>
      </Link> */}
      {/* <Link to={`${url}/makeAdmin`}>
        <Button color="inherit">Make Admin</Button>
      </Link> */}
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
                          <Nav.Link
                            as={Link}
                            style={{ color: 'white' }}
                            to={`${url}/payment`}
                          >
                            Pay
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link
                            as={Link}
                            style={{ color: 'white' }}
                            to={`${url}/myOrders`}
                          >
                            My Orders
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link
                            as={Link}
                            style={{ color: 'white' }}
                            to={`${url}/review`}
                          >
                            Review
                          </Nav.Link>
                        </li>
                        {admin && (
                          <>
                            <li>
                              <Nav.Link
                                as={Link}
                                style={{ color: 'white' }}
                                to={`${url}/manageProducts`}
                              >
                                Manage Products
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link
                                as={Link}
                                style={{ color: 'white' }}
                                to={`${url}/manageOrders`}
                              >
                                Manage Orders
                              </Nav.Link>
                            </li>

                            <li>
                              <Nav.Link
                                as={Link}
                                style={{ color: 'white' }}
                                to={`${url}/makeAdmin`}
                              >
                                Make Admin
                              </Nav.Link>
                            </li>
                            <li>
                              <Nav.Link
                                as={Link}
                                style={{ color: 'white' }}
                                to={`${url}/addProducts`}
                              >
                                Add Products
                              </Nav.Link>
                            </li>
                          </>
                        )}
                        <li>
                          <Nav.Link style={{ color: 'white' }} as={Link} to="/">
                            Home
                          </Nav.Link>
                        </li>
                      </ul>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </Col>
            <Col xs={12} md={6} lg={10}>
              <Switch>
                <Route exact path={path}>
                  <h3>Please select a topic.</h3>
                </Route>
                <AdminRoute path={`${path}/addProducts`}>
                  <AddProduct></AddProduct>
                </AdminRoute>
                <AdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <Route path={`${path}/myOrders`}>
                  <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/review`}>
                  <Review></Review>
                </Route>
                <AdminRoute path={`${path}/manageProducts`}>
                  <ManageProducts></ManageProducts>
                </AdminRoute>
                <AdminRoute path={`${path}/manageOrders`}>
                  <ManageOrders></ManageOrders>
                </AdminRoute>
                <Route path={`${path}/payment`}>
                  <Payment></Payment>
                </Route>
              </Switch>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
