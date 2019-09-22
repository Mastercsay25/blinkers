import React from "react";
import { List, Card } from "antd";

import BookItem from "./items/BookItem";

const { Meta } = Card;

const HorizontalBookList = (props) => (
  <div>
    <h2>{props.title}</h2>
    <List
      grid={{
        gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
      }}
      dataSource={props.books}
      renderItem={item => (
        <BookItem item={item}/>
      )}
    ></List>
  </div>
);

export default HorizontalBookList;