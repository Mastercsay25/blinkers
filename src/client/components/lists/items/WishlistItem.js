import React from "react";

import { List, Col, Row, Button } from "antd";

const WishlistItem = ({item}) => (
  <List.Item>
    <Row>
      <Col span={4}>
        <img src={item.src} style={{ width: "20rem" }} />
      </Col>
      <Col span={16}>
        <p>{item.title}</p>
        <p>by {item.author}</p>
        <p>{item.recom} recommendations</p>
        <p><b>{item.cost}</b></p>
      </Col>
      <Col span={4}>
        <Button type="primary">Move to Cart</Button>
        <Button type="primary">Remove from Wishlist</Button>
      </Col>

    </Row>
  </List.Item>
);

export default WishlistItem;