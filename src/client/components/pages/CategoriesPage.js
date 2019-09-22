import React from "react";
import { Layout, Icon, AutoComplete, Input } from "antd";

import HorizontalCategoriesList from "../lists/HorizontalCategoriesList";

const { Content } = Layout;

// TODO: Refactor parts into their own components
// Implement functionality
// TODO: Style
const top = [{
  category: "Biographies",
  subCategories: [
    "Historical",
    "Notable People",
    "Military"
  ]
},{
  category: "Business",
  subCategories: [
    "Finance",
    "Economics",
    "International"
  ]
},{
  category: "Children's Books",
  subCategories: [
    "Activity Books",
    "Adventure",
    "Animals"
  ]  
},{
  category: "History",
  subCategories: [
    "America",
    "European",
    "Eastern",
  ]
},{
  category: "Fiction",
  subCategories: [
    "Fantasy",
    "Sci-Fi",
    "Mystery"
  ]
}, {
  category: "Religion & Spirituality",
  subCategories: [
    "Christianity",
    "Buddhism",
    "Agnostism"
  ]
}];

const middle = [{
  category: "Computing",
  subCategories: [
    "Hardware",
    "Software Development",
    "Information Technology"
  ]
},{
  category: "Medicine",
  subCategories: [
    "Administrative",
    "Clinical",
    "Dentistry"
  ]
},{
  category: "Social Sciences",
  subCategories: [
    "Law",
    "Comparative Politics",
    "Activism"
  ]  
},{
  category: "History",
  subCategories: [
    "America",
    "European",
    "Eastern",
  ]
},{
  category: "Fiction",
  subCategories: [
    "Fantasy",
    "Sci-Fi",
    "Mystery"
  ]
}, {
  category: "Travel",
  subCategories: [
    "Travel Guides",
    "Maps",
    "Travel Logs"
  ]
}];

const bottom = [{
  category: "LGBT",
  subCategories: [
    "Historical",
    "Fiction",
    "Biographies"
  ]
},{
  category: "Health and Fitness",
  subCategories: [
    "Body Maintenance",
    "Diseases",
    "Human Aging"
  ]
},{
  category: "Science",
  subCategories: [
    "Physics",
    "Chemistry",
    "Biology"
  ]  
},{
  category: "Romance",
  subCategories: [
    "Contemporary",
    "Epoch",
    "Erotica",
  ]
},{
  category: "Self-Help",
  subCategories: [
    "Career",
    "Social Inadequacy",
    "Abuse and Addiction"
  ]
}, {
  category: "Sports",
  subCategories: [
    "History",
    "Training",
    "Biographies"
  ]
}];


class CategoriesPage extends React.Component {
  render() {
    return (
      <Content style={{
        margin: "24px 16px", padding: 24, background: "#fff", minHeight: 720
      }}>
        <h2>All Categories</h2>
        <HorizontalCategoriesList categories={top} />
        <HorizontalCategoriesList categories={middle} />
        <HorizontalCategoriesList categories={bottom} />
      </Content>
    );
  };
}

export default CategoriesPage;