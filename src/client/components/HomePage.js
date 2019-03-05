import React from 'react';
import { Layout, Row, Col, Icon, Menu, Dropdown, Button, AutoComplete, Input, Form } from "antd";
import LoginForm from "./LoginForm";

const { Header, Sider, Content, Footer, } = Layout;

const handleSubmit = () => { };

class HomePage extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  menu = () => (
    <LoginForm />
  );

  render() {
    return (
      <Row>
        <Layout hasSider>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            collapsedWidth={0}
          >
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Row type="flex" justify="space-around">
                <Col span={4}>
                  <Icon
                    className="trigger"
                    type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                    onClick={this.toggle}
                  />
                </Col>
                <Col span={4} offset={6}>
                  <h1> Nabooks </h1>
                </Col>
                <Col span={4} offset={6}>
                  <Dropdown overlay={this.menu}>
                    <Button>Login</Button>
                  </Dropdown>
                </Col>
              </Row>
            </Header>
            <Content style={{
              margin: "24px 16px", padding: 24, background: "#fff", minHeight: 720
            }}>
              <AutoComplete>
                <Input suffix={<Icon type="search" />} />
              </AutoComplete>
            </Content>
            <Footer>
            </Footer>
          </Layout>
        </Layout>
      </Row>
    );
  };
}

export default HomePage;