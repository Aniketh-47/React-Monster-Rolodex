import { Component } from "react";
import "./search-box.style.css";

const SearchBox = ({ className, placeholder, OnChangeHandler }) => (
  <input
    type="search"
    className={`search-box ${className}`}
    placeholder={placeholder}
    onChange={OnChangeHandler}
  />
);

export default SearchBox;
