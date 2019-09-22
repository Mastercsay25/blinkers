import React from "react";

import { List, Button, Row, Col } from "antd";

const CartItem = ({item}) => (
  <List.Item>
    <Row>
      <Col span={8}>
        <img src={item.src} style={{ width: "20rem" }} />
      </Col>
      <Col span={12}>
        <p>{item.title}</p>
        <p>by {item.author}</p>
        <p>{item.recom} recommendations</p>
        <p><b>{item.cost}</b></p>
      </Col>
      <Col span={4}>
        <Button type="primary">Move to Wishlist</Button>
        <Button type="primary">Remove from Cart</Button>
      </Col>
    </Row>
  </List.Item>
);

export default CartItem;