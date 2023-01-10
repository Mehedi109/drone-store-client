import React, { useEffect } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AllProduct.css";

const AllProduct = ({ product }) => {
  const { _id, img, name, price, description } = product;

  const history = useHistory();

  const url = `/order/${_id}`;
  const handlePurchase = () => {
    history.push(url);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Col sm={12} md={6} lg={4}>
      <div className="products">
        <div className="card-main" data-aos="zoom-in" data-aos-duration="1000">
          <div className="layer"></div>
          <div className="card-content">
            <Card
              style={{
                border: "",
                height: "",
                backgroundColor: "",
                borderRadius: "",
              }}
              className=""
            >
              <div className="card-image">
                <Card.Img
                  variant="top"
                  src={img}
                  style={{ width: "160px", height: "160px" }}
                />
              </div>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description.slice(0, 100)}...</Card.Text>
                <Card.Title>${price}</Card.Title>
              </Card.Body>
              <small>
                <Button
                  onClick={handlePurchase}
                  variant="success"
                  className="mb-3 fancy-btn"
                >
                  Purchase Now
                </Button>
              </small>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default AllProduct;
