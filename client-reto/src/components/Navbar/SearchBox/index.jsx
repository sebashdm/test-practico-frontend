import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import searchIcon from "../../../assets/search.png";
import { fecthAsyncItems } from "../../../redux/items/itemsSlice";
import Styles from "./styles.module.scss";

const SearchBox = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term) {
      dispatch(fecthAsyncItems(term));
      history.push(`/items?search=${term}`);
      setTerm("");
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
        value={term}
        onChange={handleChange}
      />
      <button aria-label="Buscar">
        <img src={searchIcon} alt="Buscar" />
      </button>
    </form>
  );
};

export default SearchBox;
