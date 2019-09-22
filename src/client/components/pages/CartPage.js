import React from "react";

import { Layout, Row, Col, Button } from "antd";

import CartList from "../lists/CartList";
import books from "../../utils/books";

const { Content } = Layout;

class CartPage extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  showLogin = () => (
    <LoginForm />
  );

  render() {
    return (
      <Content style={{
        margin: "24px 16px", padding: 24, background: "#fff", minHeight: 720
      }}>
        <Row>
          <Col span={20}>
            <h1>Shopping Cart</h1>
            <CartList userList={books} />
          </Col>
          <Col span={4}>
            <p>Subtotal {"1 item"}: {"$100.00"}</p>
            <Button>Check Out</Button>
          </Col>
        </Row>
      </Content>
    );
  };
};

export default CartPage;