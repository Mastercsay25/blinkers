import React from "react";

import { Link } from "react-router-dom";
import { List, Card } from "antd";

const CategoryItem = ({ item }) => (
  <List.Item>
    <Card size="small" title={<Link to={`/categories/${item.category.toLowerCase()}`}>{item.category}</Link>}>
      <List
        dataSource={item.subCategories}
        renderItem={subItem => (
          <List.Item>
            {<Link to={`/categories/${subItem.toLowerCase()}`}>{subItem}</Link>}
          </List.Item>
        )}
      >
      </List>
    </Card>
  </List.Item>
);

export default CategoryItem;