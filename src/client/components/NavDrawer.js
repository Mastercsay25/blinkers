import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

const NavDrawer = (props) => (
  <Sider
    trigger={null}
    collapsible
    collapsed={props.collapsed}
    collapsedWidth={0}
  >
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <SubMenu
        key="sub1"
        title={<span><Icon type="read" /><span>Categories</span></span>}
      >
        <Menu.Item key="a">Self-Care</Menu.Item>
        <Menu.Item key="b">Biography</Menu.Item>
        <Menu.Item key="c">Non-Fiction</Menu.Item>
        <Menu.Item key="d">Fantasy</Menu.Item>
        <Menu.Item key="e">Sci-Fi</Menu.Item>
        <Menu.Item key="f">Science</Menu.Item>
        <Menu.Item key="g">Computing</Menu.Item>
        <Menu.Item key="h">Economics</Menu.Item>
        <Menu.Item key="i">Language</Menu.Item>
      </SubMenu>
      <Menu.Item key="1">
        <Icon type="start" />
        <span>Wishlist</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="shopping-cart" />
        <span>Cart</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="search" />
        <span>Shopping History</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="setting" />
        <span>Account</span>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default NavDrawer;