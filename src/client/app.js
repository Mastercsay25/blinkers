import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { storeBooks } from "./actions/books.js";
import books from "./utils/books.js"

import "normalize.css/normalize.css";
import "./styles/styles.less";

const store = configureStore();
store.dispatch(storeBooks(books));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector("#root"));