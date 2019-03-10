import React from "react";
import { Layout, Icon, AutoComplete, Input } from "antd";

import NavDrawer from "./NavDrawer";
import LoginForm from "./LoginForm";
import HorizontalBookList from "./HorizontalBookList";
import Footer from "./Footer";
import Header from "./Header";

const { Content } = Layout;

// TODO: Refactor parts into their own components
// Implement functionality
// TODO: Style


class HomePage extends React.Component {
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
          <Header collapsed={this.state.collapsed} toggle={this.toggle} showLogin={this.showLogin}/> 

          <Content style={{
            margin: "24px 16px", padding: 24, background: "#fff", minHeight: 720
          }}>
            <AutoComplete>
              <Input suffix={<Icon type="search" />} />
            </AutoComplete>

            <HorizontalBookList />
            <HorizontalBookList />
            <HorizontalBookList />
          </Content>

          <Footer />
        </Layout>
      </Layout>
    );
  };
}

export default HomePage;