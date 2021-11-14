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
        <div>
          <Row className="g-4">
            <h2>All Products</h2>
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
