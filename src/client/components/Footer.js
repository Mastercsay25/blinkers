import React from "react";
import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

const MyFooter = () => (
  <Footer style={{ background: "#ffe", padding: 0, minHeight: 128 }}>
    <Col>
      <Row>
        <a href="/">About</a>
        <a href="/">Help</a>
        <a href="/">Language: English</a>
      </Row>
      <Row>
        All Rights Reserved (C) 2019.
    </Row>
    </Col>
  </Footer>
);

export default MyFooter;