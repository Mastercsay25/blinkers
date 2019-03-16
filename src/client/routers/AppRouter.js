import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import createHistory from "history/createBrowserHistory";

import NavDrawer from "./../components/navigation/NavDrawer";
import LoginForm from "./../components/navigation/LoginForm";
import Footer from "./../components/navigation/Footer";
import Header from "./../components/navigation/Header";
import HomePage from "./../components/pages/HomePage";
import WishlistPage from "./../components/pages/WishlistPage";
import CartPage from "./../components/pages/CartPage";
import BookItemPage from "./../components/pages/BookItemPage";
import SettingsPage from "./../components/pages/SettingsPage";
import CategoryPage from "./../components/pages/CategoryPage";
import HistoryPage from "./../components/pages/HistoryPage";
import NotFoundPage from "./../components/pages/NotFoundPage";

export const history = createHistory();

class AppRouter extends React.Component {
  state = {
    collapsed: true,
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
      <BrowserRouter>
        <Layout hasSider>
          <NavDrawer collapsed={this.state.collapsed} />
          <Layout>
            <Header collapsed={this.state.collapsed} toggle={this.toggle} showLogin={this.showLogin} />
            <Switch>
              <Route path="/" component={HomePage} exact isPublic />
              <Route path="/wishlist" component={WishlistPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/book/:id" component={BookItemPage} />
              <Route path="/categories/:cat" component={CategoryPage} />
              <Route path="/history" component={HistoryPage} />
              <Route path="/settings" component={SettingsPage} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
};

export default AppRouter;