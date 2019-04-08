import React from "react";
import { Layout, Icon, AutoComplete, Input } from "antd";

import HorizontalBookList from "../lists/HorizontalBookList";

const { Content } = Layout;

// TODO: Refactor parts into their own components
// Implement functionality
// TODO: Style


class HomePage extends React.Component {
  render() {
    return (
      <Content style={{
        margin: "24px 16px", padding: 24, background: "#fff", minHeight: 720
      }}>
        <HorizontalBookList />
        <HorizontalBookList />
        <HorizontalBookList />
      </Content>
    );
  };
}

export default HomePage;