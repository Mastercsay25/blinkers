import React from "react";

import { Layout } from "antd";

import HistoryList from "../lists/HistoryList";
import books from "../../utils/books";

const { Content } = Layout;

class HistoryPage extends React.Component {
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
        <h1>Shopping History</h1>
        <HistoryList userList={books} />
      </Content>
    );
  };
};

export default HistoryPage;