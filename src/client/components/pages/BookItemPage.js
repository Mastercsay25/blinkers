import React from "react";
import { connect } from "react-redux";
import { Layout, Row, Col, Icon, Button } from "antd";

import LoginForm from "../navigation/LoginForm";
import HorizontalBookList from "../lists/HorizontalBookList";

const { Content } = Layout;

class BookItemPage extends React.Component {
  bookId = this.props.location.pathname.split("/")[2];
  currentBook = this.props.books[
    this.props.books.findIndex(book => book.id == this.bookId)
  ];

  render() {
    console.log(this.currentBook);
    return (
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          minHeight: 720
        }}
      >
        <Row>
          <h1>{this.currentBook.title}</h1>
          <h2>{`by ${this.currentBook.author}`}</h2>
          <Col span={12}>
            <img className="previewImg" src={`../${this.currentBook.src}`} />
          </Col>
          <Col span={12}>
            <ul>
              <li>{`ISBN: ${1}`}</li>
              <li>{`ISBN-13: ${1}`}</li>
              <li>{`Publisher: ${1}`}</li>
              <li>{`Publish Date: ${1}`}</li>
              <li>{`Series: ${1}`}</li>
              <li>{`Edition: ${1}`}</li>
              <li>{`Page Count: ${1}`}</li>
              <li>{`Categories: ${1}`}</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <h3>Available Editions</h3>
          <HorizontalBookList />
        </Row>
        <Row>
          <h3>Available Formats</h3>
          <HorizontalBookList />
        </Row>
        <Row>
          <h3>Other books you may like</h3>
          <HorizontalBookList />
        </Row>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps, undefined)(BookItemPage);
