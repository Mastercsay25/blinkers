import React from "react";

import { List } from "antd";

import CategoryItem from "./items/CategoryItem";

const HorizontalCategoriesList = (props) => (
  <div>
    <h2>{props.title}</h2>
    <List
      grid={{
        gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
      }}
      dataSource={props.categories}
      renderItem={item => (
        <CategoryItem item={item}/>
      )}
    ></List>
  </div>
);

export default HorizontalCategoriesList;