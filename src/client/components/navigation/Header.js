import React from "react";
import { Link } from "react-router-dom";
import { Layout, Col, Row, Dropdown, Button, Icon, AutoComplete, Input } from "antd";

const { Header } = Layout;


const MyHeader = (props) => (
  <Header className="header">
    <Row type="flex" justify="center">
      <Col span={6} className="header__container">
        <Icon
          className="header__expand-icon"
          type={props.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={props.toggle}
        />
        <Link className="header__logo" to="/">
          <h1 className="header__logo--color-green"> Blinkers </h1>
        </Link>
      </Col>
      <Col span={12} className="header__container">
        <AutoComplete className="header__search">
          <Input suffix={<Icon type="search" />} />
        </AutoComplete>
      </Col>
      <Col span={6} className="header__container header__container--login">
        <Dropdown overlay={props.showLogin}>
          <Button className="header__button">Login</Button>
        </Dropdown>
      </Col>
    </Row>
  </Header>
);

// <Col span={4} offset={6}>
// <Link to="/">
//   <h1> Blinkers </h1>
// </Link>
// </Col>

export default MyHeader;