import React from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
  
import HomePage from "./components/HomePage";
import WishlistPage from "./components/WishlistPage";
import CartPage from "./components/CartPage";
import BookItemPage from "./components/BookItemPage";

const jsx = (
  <div>
    <BookItemPage/>
  </div>
);

// <h1>This is my page!</h1>
// <p>Current antd version: {version}</p>
// <Button type="primary">Hello Button</Button>

ReactDOM.render(jsx, document.querySelector("#root"));