import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Reviews = () => {
  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-5">User Reviews</h3>
        <Row className="g-5 mb-5">
          <Col sm={12} md={6} lg={4}>
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                <img
                  src="https://i.imgur.com/PKHvlRS.jpg"
                  className="rounded-circle"
                  width="80"
                  alt=""
                />{' '}
              </div>
              <div className="user-content">
                <h5 className="mb-0">Bruce Hardy</h5>{' '}
                <span>Software Developer</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="ratings">
                {' '}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{' '}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{' '}
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                <img
                  src="https://i.imgur.com/PKHvlRS.jpg"
                  className="rounded-circle"
                  width="80"
                  alt=""
                />{' '}
              </div>
              <div className="user-content">
                <h5 className="mb-0">Bruce Hardy</h5>{' '}
                <span>Software Developer</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="ratings">
                {' '}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{' '}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{' '}
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className="card p-3 text-center px-4">
              <div className="user-image">
                <img
                  src="https://i.imgur.com/PKHvlRS.jpg"
                  className="rounded-circle"
                  width="80"
                  alt=""
                />{' '}
              </div>
              <div className="user-content">
                <h5 className="mb-0">Bruce Hardy</h5>{' '}
                <span>Software Developer</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="ratings">
                {' '}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{' '}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{' '}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
