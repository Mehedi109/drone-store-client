import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllProduct from '../AllProduct/AllProduct';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://afternoon-wave-35884.herokuapp.com/drones')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Header></Header>
      <Container>
        <div className="mb-5" style={{ marginTop: '100px' }}>
          {/* <h2>All</h2> */}
          <h3 className="text-danger mb-4">See Our All Products</h3>
          <Row className="g-4">
            {products.map((product) => (
              <AllProduct key={product._id} product={product}></AllProduct>
            ))}
          </Row>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default AllProducts;
