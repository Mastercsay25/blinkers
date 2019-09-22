import React from "react";

import WishlistItem from "./items/WishlistItem";
import { List } from "antd";

const WishlistList = (props) => (
  <List
    itemLayout="vertical"
    size="large"
    dataSource={props.userList}
    renderItem={item => (
      <WishlistItem item={item}/>
    )}
  />
);

export default WishlistList;