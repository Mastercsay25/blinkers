import React from "react";

import { Layout, Row, Col, Button } from "antd";

const { Content } = Layout;

import BookItem from "../lists/items/BookItem";
// import from "./";

class HistoryPage extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <Content style={{
        margin: "24px 16px", padding: 24, background: "#fff", minHeight: 720
      }}>
        <Row>
          <Col>
            <BookItem />
            <BookItem />
            <BookItem />
          </Col>
        </Row>
      </Content>
    );
  }
};

export default HistoryPage;