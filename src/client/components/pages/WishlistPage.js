import React from "react";
import { Layout, List} from "antd";

import LoginForm from "../navigation/LoginForm";
import WishlistFilters from "../lists/modifiers/WishlistFilters";
import WishlistList from "../lists/WishlistList";

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
      <Content style={{
        margin: "24px 16px", padding: 24, background: "#fff", minHeight: 720
      }}>
        <List/>
      </Content>
    );
  };
};

export default WishlistPage;