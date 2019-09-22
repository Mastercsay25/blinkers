import React from "react";
import { Layout } from "antd";

import books from "../../utils/books";
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
        <HorizontalBookList books={books} title="New Releases"/>
        <HorizontalBookList books={books} title="Most Recommended"/>
        <HorizontalBookList books={books} title="Suggestions for You"/>
      </Content>
    );
  };
}

export default HomePage;