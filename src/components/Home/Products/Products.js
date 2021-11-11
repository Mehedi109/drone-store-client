import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/drones')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <div>
        <h3 className="mt-5 mb-5">Buy Your desired drone</h3>
        <Row className="g-5">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Products;
