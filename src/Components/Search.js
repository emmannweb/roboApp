import React from "react";

const Search = props => {
  return (
    <input
      type="search"
      placeholder="Search a Robot"
      className="search__input"
      onChange={props.PropSearch}
    />
  );
};
export default Search;
