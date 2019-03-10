import React from "react";

import { Layout, Row, Col, Button } from "antd";

const { Content } = Layout;

import Header from "./Header";
import Footer from "./Footer";
import NavDrawer from "./NavDrawer";

import BookItem from "./BookItem";
// import from "./";

class CartPage extends React.Component {
  state = {
    collapsed: false,
  };

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
              <Col>
                <BookItem />
                <BookItem />
                <BookItem />
              </Col>
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
          <Footer />
        </Layout>
      </Layout>
    );
  }
};

export default CartPage;