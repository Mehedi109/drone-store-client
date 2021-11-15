import { Alert } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState('');

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    fetch('https://afternoon-wave-35884.herokuapp.com/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleUpdate = (id) => {
    fetch(`https://afternoon-wave-35884.herokuapp.com/updateStatus/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.promoteValues == true) {
          alert('Status Updated');
        }
      });
  };

  const handleDelete = (id) => {
    const url = `https://afternoon-wave-35884.herokuapp.com/orders/${id}`;
    const proceed = window.confirm('Are you sure to delete');
    if (proceed) {
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert('Deleted Successfully');
            const remainig = orders.filter((order) => order._id !== id);
            setOrders(remainig);
          }
        });
    }
  };
  return (
    <div>
      <h2 className="mt-5 mb-5">All Orders : {orders.length}</h2>
      <Table className="manage-orders" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>name</th>
            <th>Address</th>
            <th>Product Name</th>
            <th>Total Price</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td>{order.name}</td>
              <td>{order.address}</td>
              <td>{order.product}</td>
              <td>{order.price}</td>
              <td>{order.phone}</td>
              <td>
                <input
                  onChange={handleStatus}
                  type="text"
                  defaultValue={order.status}
                />
              </td>
              <td>
                <button
                  onClick={() => handleUpdate(order._id)}
                  className="btn btn-info p-2"
                >
                  Update
                </button>
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

export default ManageOrders;
