import React from "react";

import { List, Row, Col } from "antd";

const HistoryItem = () => (
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
        <p>Date purchased: {"09/22/2019"}</p>
      </Col>
    </Row>
  </List.Item>
); 

export default  HistoryItem;