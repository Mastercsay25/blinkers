import React from "react";

import { Link } from "react-router-dom";

import { List, Card } from "antd";

const { Meta } = Card; 

const BookItem = ({item}) => (
  <List.Item>
    <Link to={`/book/${item.id}`}>
      <Card className="bookCard" hoverable cover={<img className="previewImg" src={item.src} style={{ width: "100%" }} />}>
        <Meta title={item.title} description={`by ${item.author}`} />
      </Card>
    </Link>
  </List.Item>
);

export default BookItem;