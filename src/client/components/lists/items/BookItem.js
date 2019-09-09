import React from "react";

import { Row, Col, Button } from "antd";

const BookItem = () => (
  <div>
    <Row>
      <Col>
        <img src="" alt="Book" />
      </Col>
      <Col>
        <h4>Book 1</h4>
        <p>$10.00</p>
      </Col>
      <Col>
        <Button type="primary">Place in Cart</Button>
        <Button type="danger">Delete</Button>
      </Col>
    </Row>
  </div>
);

export default BookItem;