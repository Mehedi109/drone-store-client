import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "./AddProduct.css";

const AddProduct = () => {
  const initialInfo = {
    img: "",
    name: "",
    description: "",
    price: "",
  };
  const [productInfo, setProductInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...productInfo };
    newInfo[field] = value;
    setProductInfo(newInfo);
  };

  const handleAddProduct = (e) => {
    // collect data
    const addProduct = {
      ...productInfo,
    };
    // send to the server
    fetch("https://drone-store-server.onrender.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Added Successfully");
        e.target.reset();
      });

    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-4">Add A Product</h3>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Form className="mx-auto product-form" onSubmit={handleAddProduct}>
              <Form.Control
                type="text"
                placeholder="Image Url"
                name="img"
                onBlur={handleOnBlur}
                className="mb-4"
              />
              <Form.Control
                type="text"
                placeholder="Product Name"
                name="name"
                onBlur={handleOnBlur}
                className="mb-4"
              />
              <Form.Control
                type="text"
                placeholder="Price"
                name="price"
                onBlur={handleOnBlur}
                className="mb-4"
              />
              <Form.Control
                as="textarea"
                rows={5}
                type="text"
                placeholder="Description"
                name="description"
                onBlur={handleOnBlur}
                className="mb-4"
              />
              <Button
                type="submit"
                variant="success"
                style={{
                  marginBottom: "20px",
                }}
              >
                Add Product
              </Button>{" "}
              <br />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProduct;
