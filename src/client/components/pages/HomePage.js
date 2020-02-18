import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";

import books from "../../utils/books";
import HorizontalBookList from "../lists/HorizontalBookList";

const { Content } = Layout;

// TODO: Refactor parts into their own components
// Implement functionality
// TODO: Style

class HomePage extends React.Component {
  renderSuggestionsList = () => {
    if (Object.keys(this.props.auth).length > 0) {
      return <HorizontalBookList books={this.props.books} title="Suggestions for You" />
    }
    return false;
  };

  render() {
    return (
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 720
        }}
      >
        <HorizontalBookList books={this.props.books} title="New Releases" />
        <HorizontalBookList books={this.props.books} title="Most Recommended" />
        {this.renderSuggestionsList()}
      </Content>
    );
  }
}

const mapStateToProps = ({ auth, books }) => ({
  auth,
  books
});

export default connect(mapStateToProps)(HomePage);
