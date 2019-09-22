import React from "react";
import { Layout, List} from "antd";

import LoginForm from "../navigation/LoginForm";
import WishlistList from "../lists/WishlistList";
import books from "../../utils/books";

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
        <h1>Wishlist</h1>
        <WishlistList userList={books}/>
        <div>
        </div>
      </Content>
    );
  };
};

export default WishlistPage;