import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
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
        <h3 className="mt-5 mb-5">Buy Your desired drone</h3>
        <Row className="g-5">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
      </div>
      <Link to="/allProducts">
        <Button>Load More Products</Button>
      </Link>
    </Container>
  );
};

export default Products;
