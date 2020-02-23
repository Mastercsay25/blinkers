import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { createBrowserHistory } from "history";

import NavDrawer from "./../components/navigation/NavDrawer";
import LoginForm from "./../components/navigation/LoginForm";
import Footer from "./../components/navigation/Footer";
import Header from "./../components/navigation/Header";
import HomePage from "./../components/pages/HomePage";
import WishlistPage from "./../components/pages/WishlistPage";
import CartPage from "./../components/pages/CartPage";
import BookItemPage from "./../components/pages/BookItemPage";
import SettingsPage from "./../components/pages/SettingsPage";
import CategoriesPage from "./../components/pages/CategoriesPage";
import CategoryPage from "./../components/pages/CategoryPage";
import HistoryPage from "./../components/pages/HistoryPage";
import NotFoundPage from "./../components/pages/NotFoundPage";

export const history = createBrowserHistory();

class AppRouter extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Layout hasSider>
          <NavDrawer collapsed={this.state.collapsed} />
          <Layout>
            <Header collapsed={this.state.collapsed} toggle={this.toggle} showLogin={this.showLogin} />
            <Switch>
              <Route exact path="/" component={HomePage} isPublic />
              <Route path="/wishlist" component={WishlistPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/book/:id" component={BookItemPage} />
              <Route exact path="/categories/" component={CategoriesPage} />
              <Route path="/categories/:cat" component={CategoryPage} />
              <Route path="/history" component={HistoryPage} />
              <Route path="/settings" component={SettingsPage} />
              <Route path = "/not-found" component={NotFoundPage} />
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