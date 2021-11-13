import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/myOrders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    const proceed = window.confirm('Are you sure to cancel your order');
    if (proceed) {
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert('Your Order has Canceled');
            const remainig = orders.filter((order) => order._id !== id);
            setOrders(remainig);
          }
        });
    }
  };

  return (
    <div>
      <Table className="manage-orders" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Email</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td>{order.email}</td>
              <td>{order.price}</td>
              <td>{order.status}</td>
              <td>
                <Link to={`/updateOrders/${order._id}`}>
                  <button className="btn btn-info">Edit</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(order._id)}
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

export default MyOrders;
