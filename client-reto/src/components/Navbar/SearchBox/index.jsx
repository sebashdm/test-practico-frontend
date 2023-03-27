import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setTerm } from "../../../redux/search/searchSlice";
import searchIcon from "../../../assets/search.png";
import Styles from "./styles.module.scss";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const term = useSelector((state) => state.search.term);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setInputValue(e.target.value);
    dispatch(setTerm(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term) {
      setInputValue("");
      history.push(`/items?search=${term}`);
    }
  };

  return (
    <form
      className={Styles.searchForm}
      onSubmit={handleSubmit}
      data-testid="search-form"
    >
      <input
        type="text"
        id="search-input"
        placeholder="Buscar productos, marcas y más..."
        value={inputValue}
        onChange={handleChange}
        autoComplete="off"
      />
      <button aria-label="Buscar">
        <img src={searchIcon} alt="Buscar" />
      </button>
    </form>
  );
};

export default SearchBox;
