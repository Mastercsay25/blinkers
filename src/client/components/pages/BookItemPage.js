import React from "react";
import { Layout, Row, Col, Icon, Button } from "antd";

import LoginForm from "../navigation/LoginForm";
import HorizontalBookList from "../lists/HorizontalBookList";

const { Content } = Layout;

class BookItemPage extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  showLogin = () => (
    <LoginForm />
  );

  render() {
    return (
      <Content style={{
        margin: "24px 16px", padding: 24, background: "#fff", minHeight: 720
      }}>
        <Row>
          <h1>Book 1</h1>
          <Col><Icon type="star" /></Col>
          <Col><Button>Cart</Button></Col>
        </Row>
        <Row>
          <Col>
            <img src="" />
            <p>$10.00</p>
          </Col>
          <Col>
            <p>Code: AXYZ</p>
            <p>Code: AXYZ</p>
            <h2>Categories:</h2>
            <span>Fiction</span> <span>Sci-Fi</span>
            <h2>Description</h2>
            <p>Lorem Ipsum dolor sit. Amet.</p>
          </Col>
        </Row>
        <HorizontalBookList />
      </Content>
    );
  };
};

export default BookItemPage;