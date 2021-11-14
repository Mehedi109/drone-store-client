import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAddAdmin = (e) => {
    const user = { email };
    const url = 'https://afternoon-wave-35884.herokuapp.com/users/admin';
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail('');
          setSuccess(true);
          alert('The user added as admin');
        } else {
          alert('not added');
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make Admin</h2>
      <Form onSubmit={handleAddAdmin}>
        <Form.Control
          type="email"
          placeholder="Email"
          name="name"
          onBlur={handleOnBlur}
          className=""
        />
        <Button type="submit" variant="primary">
          Make Admin
        </Button>
      </Form>
    </div>
  );
};

export default MakeAdmin;
