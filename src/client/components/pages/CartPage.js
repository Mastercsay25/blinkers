import React from "react";

import { Layout, Row, Col, Button, List } from "antd";

const { Content } = Layout;

import BookItem from "../lists/items/BookItem";

class CartPage extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <Content style={{
        margin: "24px 16px", padding: 24, background: "#fff", minHeight: 720
      }}>
        <Row>
          <List />
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>Total Items:</Col>
              <Col>2</Col>
              <Col>
                <Button>Checkout</Button>
              </Col>
            </Row>
            <Row>
              <Col>Total Price: </Col>
              <Col>$22.00</Col>
            </Row>
          </Col>
        </Row>
      </Content>
    );
  }
};

export default CartPage;