import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AllProduct from "../AllProduct/AllProduct";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://drone-store-server.onrender.com/drones")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Header></Header>
      <div style={{ backgroundColor: "" }}>
        <Container>
          <div className="mb-5" style={{ marginTop: "130px" }}>
            {/* <h2>All</h2> */}
            <h3
              className="text-danger mb-4"
              style={{
                fontFamily: "Libre Baskerville serif",
                fontWeight: "600",
              }}
            >
              See Our All Products
            </h3>
            <Row className="g-4">
              {products.map((product) => (
                <AllProduct key={product._id} product={product}></AllProduct>
              ))}
            </Row>
          </div>
        </Container>
      </div>

      <Footer></Footer>
    </>
  );
};

export default AllProducts;
