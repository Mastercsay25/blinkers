import React from "react";
import { Link } from "react-router-dom";
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
    <Menu theme="dark" mode="inline">
      <Menu.Item key="0">
        <Link to="/">
          <Icon type="home" />
          <span>Home</span>
        </Link>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={<span><Icon type="read" /><span>Categories</span></span>}
      >
        <Menu.Item key="a"><Link to="/categories/self-care">Self-Care</Link></Menu.Item>
        <Menu.Item key="b"><Link to="/categories/biography">Biography</Link></Menu.Item>
        <Menu.Item key="c"><Link to="/categories/non-fiction">Non-Fiction</Link></Menu.Item>
        <Menu.Item key="d"><Link to="/categories/fantasy">Fantasy</Link></Menu.Item>
        <Menu.Item key="e"><Link to="/categories/sci-fi">Sci-Fi</Link></Menu.Item>
        <Menu.Item key="f"><Link to="/categories/science">Science</Link></Menu.Item>
        <Menu.Item key="g"><Link to="/categories/computing">Computing</Link></Menu.Item>
        <Menu.Item key="h"><Link to="/categories/economics">Economics</Link></Menu.Item>
        <Menu.Item key="i"><Link to="/categories/language">Language</Link></Menu.Item>
      </SubMenu>
      <Menu.Item key="1">
        <Link to="/wishlist">
          <Icon type="star" />
          <span>Wishlist</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/cart">
          <Icon type="shopping-cart" />
          <span>Cart</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/history">
          <Icon type="search" />
          <span>Shopping History</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/settings">
          <Icon type="setting" />
          <span>Account</span>
        </Link>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default NavDrawer;