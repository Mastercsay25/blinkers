import React from "react";
import { Link } from "react-router-dom";
import { Layout, Col, Row, Dropdown, Button, Icon } from "antd";

const { Header } = Layout;

const MyHeader = (props) => (
  <Header style={{ background: "#fff", padding: 0 }}>
    <Row type="flex" justify="space-around">
      <Col span={4}>
        <Icon
          className="trigger"
          type={props.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={props.toggle}
        />
      </Col>
      <Col span={4} offset={6}>
        <Link to="/">
          <h1> Nabu </h1>
        </Link>
      </Col>
      <Col span={4} offset={6}>
        <Dropdown overlay={props.showLogin}>
          <Button>Login</Button>
        </Dropdown>
      </Col>
    </Row>
  </Header>
);

export default MyHeader;