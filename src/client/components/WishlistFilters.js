import React from "react";
import { Input } from "antd";

const { Search } = Input;

const handleSearch = (value) => {
  console.log(value);
};

const WishlistFilters = (props) => (
  <div>
    <Search
      placeholder="Search Book"
      onSearch={handleSearch}
      style={{ width: 200 }}
    />
  </div>
);
export default WishlistFilters;