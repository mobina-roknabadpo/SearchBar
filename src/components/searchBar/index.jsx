import React from "react";
import Input from "../Input/index.jsx";

const SearchBar = ({ query, setQuery }) => {
  return <Input query={query} setQuery={setQuery} />;
};

export default SearchBar;
