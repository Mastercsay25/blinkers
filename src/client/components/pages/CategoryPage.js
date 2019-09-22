import React from "react";
import { Layout } from "antd";

import books from "../../utils/books";
import HorizontalBookList from "../lists/HorizontalBookList";

const { Content } = Layout;

// TODO: Refactor parts into their own components
// Implement functionality
// TODO: Style

class CategoryPage extends React.Component {
  render() {
    return (
      <Content style={{
        margin: "24px 16px", padding: 24, background: "#fff", minHeight: 720
      }}>
        <h2>Category</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Nunc consequat interdum varius sit amet mattis vulputate enim. Accumsan lacus vel facilisis volutpat est. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Vitae auctor eu augue ut lectus arcu bibendum. Sapien et ligula ullamcorper malesuada proin libero. Neque vitae tempus quam pellentesque nec nam aliquam sem. Sit amet aliquam id diam maecenas. Vulputate sapien nec sagittis aliquam. Ultricies lacus sed turpis tincidunt id. Eget egestas purus viverra accumsan in nisl. Arcu bibendum at varius vel. Pellentesque habitant morbi tristique senectus et netus et. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Non blandit massa enim nec dui nunc mattis enim ut. Curabitur vitae nunc sed velit. Adipiscing elit duis tristique sollicitudin. Nisl suscipit adipiscing bibendum est ultricies integer.</p>
        <HorizontalBookList books={books} title="Best Sellers" />
        <HorizontalBookList books={books} title="New Releases" />
        <HorizontalBookList books={books} title="Most Recommended" />
      </Content>
    );
  };
}

export default CategoryPage;