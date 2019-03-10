import React from "react";
import { Layout, Row, Col } from "antd";

import NavDrawer from "./NavDrawer";
import LoginForm from "./LoginForm";
import Header from "./Header";
import Footer from "./Footer";
import WishlistFilters from "./WishlistFilters";
import WishlistList from "./WishlistList";

const { Content } = Layout;

class WishlistPage extends React.Component {
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
      <Layout hasSider>
        <NavDrawer collapsed={this.state.collapsed} />
        <Layout>
          <Header collapsed={this.state.collapsed} toggle={this.toggle} showLogin={this.showLogin} />

          <Content style={{
            margin: "24px 16px", padding: 24, background: "#fff", minHeight: 720
          }}>
            <Row>
              <Col>
                <WishlistFilters />
              </Col>
            </Row>
            <Row>
              <Col>
                <WishlistList />
              </Col>
            </Row>
          </Content>

          <Footer/>
        </Layout>
      </Layout>
    );
  };
};

export default WishlistPage;