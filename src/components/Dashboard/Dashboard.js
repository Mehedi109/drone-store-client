import React from "react";
import { Col, Container, Nav, Navbar, Row, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AdminRoute from "../Login/AdminRoute/AdminRoute";
import AddProduct from "./AddProduct/AddProduct";
import "./Dashboard.css";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageOrders from "./ManageOrders/ManageOrders";
import ManageProducts from "./ManageProducts/ManageProducts";
import MyOrders from "./MyOrders/MyOrders";
import Payment from "./Payment/Payment";
import Review from "./Review/Review";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user, admin, logOut } = useAuth();
  return (
    <>
      <Container fluid>
        <div>
          <div className="">
            <Row>
              <Col xs={12} md={6} lg={2}>
                <div className="sidebar">
                  <Navbar bg="" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <ul>
                          <li className="userName">{user.displayName}</li>
                          {!admin && user.email && (
                            <>
                              <li>
                                <Nav.Link
                                  as={Link}
                                  style={{ color: "white" }}
                                  to={`${url}/payment`}
                                >
                                  Pay
                                </Nav.Link>
                              </li>
                              <li>
                                <Nav.Link
                                  as={Link}
                                  style={{ color: "white" }}
                                  to={`${url}/myOrders`}
                                >
                                  My Orders
                                </Nav.Link>
                              </li>
                              <li>
                                <Nav.Link
                                  as={Link}
                                  style={{ color: "white" }}
                                  to={`${url}/review`}
                                >
                                  Review
                                </Nav.Link>
                              </li>
                              <li>
                                <Nav.Link
                                  style={{ color: "white" }}
                                  as={Link}
                                  to="/"
                                >
                                  Home
                                </Nav.Link>
                              </li>
                            </>
                          )}
                          {admin && (
                            <>
                              <li>
                                <Nav.Link
                                  as={Link}
                                  style={{ color: "white" }}
                                  to={`${url}/manageProducts`}
                                >
                                  Manage Products
                                </Nav.Link>
                              </li>
                              <li>
                                <Nav.Link
                                  as={Link}
                                  style={{ color: "white" }}
                                  to={`${url}/manageOrders`}
                                >
                                  Manage Orders
                                </Nav.Link>
                              </li>

                              <li>
                                <Nav.Link
                                  as={Link}
                                  style={{ color: "white" }}
                                  to={`${url}/makeAdmin`}
                                >
                                  Make Admin
                                </Nav.Link>
                              </li>
                              <li>
                                <Nav.Link
                                  as={Link}
                                  style={{ color: "white" }}
                                  to={`${url}/addProducts`}
                                >
                                  Add Products
                                </Nav.Link>
                              </li>
                            </>
                          )}
                          <Button
                            style={{
                              backgroundColor: "Transparent",
                              backgroundRepeat: "no-repeat",
                              border: "none",
                              marginLeft: "-3px",
                            }}
                            onClick={logOut}
                          >
                            Logout
                          </Button>
                          {/* </li> */}
                        </ul>
                      </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                </div>
              </Col>
              <Col xs={12} md={6} lg={10}>
                <Switch>
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
    </>
  );
};

export default Dashboard;
