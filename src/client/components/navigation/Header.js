import React from "react";
import { withRouter, Link } from "react-router-dom";
import {
  Layout,
  Col,
  Row,
  Dropdown,
  Button,
  Icon,
  AutoComplete,
  Input,
  Form
} from "antd";
const { Header } = Layout;
import { connect } from "react-redux";
import { logIn, logOut } from "./../../actions/auth";
import { setTextFilter } from "./../../actions/filters";
import selectBooks from "./../../selectors/books";
import LoginForm from "./LoginForm";

const Search = Input.Search;

export class SiteHeader extends React.Component {
  showLogin = () => <LoginForm onSubmit={this.onSubmit} />;

  renderAuthButton = () => {
    if (Object.keys(this.props.auth).length > 0) {
      return (
        <Button onClick={this.onLogOut} className="header__button">
          Logout
        </Button>
      );
    }
    return (
      <Dropdown overlay={this.showLogin}>
        <Button className="header__button">Login</Button>
      </Dropdown>
    );
  };

  onSubmit = (username, password) => {
    this.props.logIn(username, password);
  };

  onLogOut = () => {
    this.props.logOut();
  };

  onTextChange = value => {
    this.props.setTextFilter(value);
  };

  onQuerySubmit = queryBook => {
    const books = this.props.books

    const index = books.findIndex(book => book.title === queryBook)

    if (index === -1) {
      this.props.history.push("/not-found")
    }

    this.props.history.push(`/book/${books[index].id}`);
  };

  render() {
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
              <h1 className="header__logo--color-blue"> Blinkers </h1>
            </Link>
          </Col>
          <Col span={12} className="header__container">
            <AutoComplete
              dataSource={this.props.booksTitles}
              className="header__search"
              value={this.props.filters.text}
              onChange={this.onTextChange}
              onSelect={this.onQuerySubmit}
              onSubmit={this.onQuerySubmit}
              placeholder="Search the library..."
            >
              <Search onSearch={this.onQuerySubmit} />
            </AutoComplete>
          </Col>
          <Col span={6} className="header__container header__container--login">
            {this.renderAuthButton()}
          </Col>
        </Row>
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  books: state.books,
  booksTitles: selectBooks(state.books, state.filters).map(book => book.title),
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  logIn: (username, password) => {
    dispatch(logIn(username, password));
  },
  logOut: () => dispatch(logOut()),
  setTextFilter: text => dispatch(setTextFilter(text))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SiteHeader)
);
