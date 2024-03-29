import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  Row,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import // getAuth,
// createUserWithEmailAndPassword,
// signInWithEmailAndPassword,
// sendEmailVerification,
// sendPasswordResetEmail,
// signOut,
// onAuthStateChanged,
// updateProfile,
"firebase/auth";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { auth, loginUser, sendPasswordResetEmail, isLoading, error } =
    useAuth();
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/dashboard";

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLogin = (e) => {
    loginUser(loginData.email, loginData.password);
    history.push(redirect_uri);
    e.preventDefault();
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, loginData.email).then((result) => {
      console.log(result);
    });
  };
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <h2 className="mt-3 mb-5">Login Here</h2>
            {error && (
              <Alert
                variant="danger"
                style={{ width: "84%", marginLeft: "65px" }}
              >
                {error}
              </Alert>
            )}
            {!isLoading && (
              <Form className="mx-1 mx-md-4" onSubmit={handleLogin}>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 fa-fw "></i>
                  <div className="w-100 ">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      onBlur={handleOnBlur}
                      className=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-lock fa-lg me-3 fa-fw "></i>
                  <div className="w-100 ">
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      onBlur={handleOnBlur}
                      className=""
                    />
                  </div>
                </div>
                <div
                  className="button"
                  style={{ marginLeft: "40px", textAlign: "start" }}
                >
                  <Button
                    type="submit"
                    variant="success"
                    style={{
                      marginRight: "20px",
                      marginBottom: "",
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    type="button"
                    variant="btn btn-secondary btn-sm"
                    onClick={handleResetPassword}
                  >
                    Reset Password
                  </Button>
                </div>
                <br />
                <div style={{ marginBottom: "30px" }}>
                  <NavLink
                    style={{
                      textDecoration: "none",
                    }}
                    to="/register"
                  >
                    New User?Please Register
                  </NavLink>
                </div>
              </Form>
            )}
            {isLoading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img
              className="img-fluid"
              src="https://i.ibb.co/Vw9wrBB/photo-1554415707-6e8cfc93fe23-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb-Gx8.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
