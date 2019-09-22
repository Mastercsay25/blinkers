import React from "react";

import { Layout, Row, Col } from "antd";

import SettingsList from "../lists/SettingsList";
import books from "../../utils/books";

const { Content } = Layout;

class SettingsPage extends React.Component {
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
        <h1>Settings</h1>
        <Row>
          <Col span={4}>
            <SettingsList/>
          </Col>
          <Col span={20}>
            ASDFASDF
          </Col>
        </Row>
      </Content>
    );
  };
};

export default SettingsPage;