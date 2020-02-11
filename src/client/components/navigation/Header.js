import React from "react";
import { Link } from "react-router-dom";
import { Layout, Col, Row, Dropdown, Button, Icon, AutoComplete, Input } from "antd";
const { Header } = Layout;

import { connect } from "react-redux";

import { logIn, logOut } from "./../../actions/auth";
import LoginForm from "./LoginForm";

export class SiteHeader extends React.Component {
  onSubmit = (username, password) => {
    this.props.logIn(username, password);
  };

  showLogin = () => (
    <LoginForm onSubmit={this.onSubmit}/>
  );

  render(){
    return (
      <Header className="header">
      <Row type="flex" justify="center">
        <Col span={6} className="header__container">
          <Icon
            className="header__expand-icon"
            type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
            onClick={this.props.toggle}
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
          <Dropdown overlay={this.showLogin}>
            { Object.keys(this.props.auth).length > 0 ? <Button className="header__button">Logout</Button>: <Button className="header__button">Login</Button> }
          </Dropdown>
        </Col>
      </Row>
    </Header>
    );
  }
}

const mapStateToProps = (state = {}) => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  logIn: (username, password) => {
    dispatch(logIn(username, password));
  },
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteHeader);