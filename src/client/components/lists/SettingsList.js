import React from "react";

import WishlistItem from "./items/BookItem";
import { List, Button, Row, Col } from "antd";

const titleList = ["Account", "Payment Methods", "Manage Friends"]

const SettingsList = (props) => (
  <List
    itemLayout="vertical"
    size="large"
    dataSource={titleList}
    renderItem={item => (
      <List.Item>
        <p>{item}</p>
      </List.Item>
    )}
  />
);

export default SettingsList;