import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import searchIcon from "../../../assets/search.png";
import { fecthAsyncItems } from "../../../redux/items/itemsSlice";
import Styles from "./styles.module.scss";

const SearchBox = () => {
  const [term, setTerm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const checkInitialLoad = async () => {
      const initialState = await dispatch(fecthAsyncItems());
      if (initialState) {
        setIsSubmitting(false);
      } else {
        dispatch(fecthAsyncItems()).then(() => setIsSubmitting(false));
      }
    };
    checkInitialLoad();
  }, [dispatch]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (term && term.trim() !== "" && !isSubmitting) {
      setIsSubmitting(true);
      await dispatch(fecthAsyncItems(term));
      setIsSubmitting(false);
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
        autoComplete="off"
      />
      <button aria-label="Buscar" disabled={isSubmitting}>
        <img src={searchIcon} alt="Buscar" />
      </button>
    </form>
  );
};

export default SearchBox;
