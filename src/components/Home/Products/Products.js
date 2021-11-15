import React, { useEffect, useState } from 'react';
import { Container, Row, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://afternoon-wave-35884.herokuapp.com/drones')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container>
      <div>
        <h3 className="mt-5 mb-5" style={{ textAlign: '' }}>
          Best Selling Products
        </h3>
        <Row className="g-4">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
        <Nav.Link
          as={Link}
          to="/allProducts"
          className="text-primary "
          style={{ fontWeight: '600', fontSize: '20px' }}
        >
          Load More .....
        </Nav.Link>
      </div>
    </Container>
  );
};

export default Products;
