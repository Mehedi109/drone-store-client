import React, { useEffect, useState } from "react";
import { Container, Row, Button, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  const url = `/allProducts`;

  const handleAllProducts = () => {
    history.push(url);
  };

  useEffect(() => {
    fetch("https://drone-store-server.onrender.com/drones")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ backgroundColor: "" }}>
      <Container>
        <div className="">
          <h3
            className="mt-5 mb-5"
            style={{ textAlign: "", color: "#5B54F1", fontSize: "30px" }}
          >
            Best Selling Drones
          </h3>
          <Row className="g-4">
            {products.slice(0, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </Row>
          <Button
            onClick={handleAllProducts}
            to="/allProducts"
            className="fancy-btn"
            style={{
              fontWeight: "",
              fontSize: "",
              padding: "7px 20px",
              marginTop: "45px",
              marginBottom: "45px",
            }}
          >
            Load More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Products;
