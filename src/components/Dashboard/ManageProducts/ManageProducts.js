import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://afternoon-wave-35884.herokuapp.com/drones')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://afternoon-wave-35884.herokuapp.com/products/${id}`;
    const proceed = window.confirm('Are you sure to remove this product');
    if (proceed) {
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert('Removed Successfully');
            const remainig = products.filter((product) => product._id !== id);
            setProducts(remainig);
          }
        });
    }
  };

  return (
    <div>
      <Table className="manage-orders" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.status}</td>
              <td>
                <Link to={`/updateOrders/${product._id}`}>
                  <button className="btn btn-info">Edit</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product._id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProducts;
