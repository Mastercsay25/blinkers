import React from "react";
import { Layout, Row, Col, Icon, Button } from "antd";

import NavDrawer from "./NavDrawer";
import LoginForm from "./LoginForm";
import Header from "./Header";
import Footer from "./Footer";
import HorizontalBookList from "./HorizontalBookList";

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
      <Layout hasSider>
        <NavDrawer collapsed={this.state.collapsed} />
        <Layout>
          <Header collapsed={this.state.collapsed} toggle={this.toggle} showLogin={this.showLogin} />

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
          </Content>

          <HorizontalBookList />
          <Footer />
        </Layout>
      </Layout>
    );
  };
};

export default BookItemPage;