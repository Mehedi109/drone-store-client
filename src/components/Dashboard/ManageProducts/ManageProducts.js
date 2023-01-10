import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://drone-store-server.onrender.com/drones")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://drone-store-server.onrender.com/products/${id}`;
    const proceed = window.confirm("Are you sure to remove this product");
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Removed Successfully");
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
            <th>Product Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>
                <img src={product.img} width="80" height="60" alt="" />
              </td>
              <td>${product.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
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
