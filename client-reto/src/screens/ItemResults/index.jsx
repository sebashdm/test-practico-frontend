import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HTTP_STATUS } from "../../redux/constants";
import { fecthAsyncItems } from "../../redux/items/itemsSlice";
import ItemsList from "./ItemList";
import { getLoadingStatus } from "../../redux/items/itemsSlice";
import Loading from "../../components/Loading";
import ErrorComponent from "../../components/ErrorComponent";
import { setTerm } from "../../redux/search/searchSlice";

const Results = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingStatus);
  const [lastSearchTerm, setLastSearchTerm] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("search");
    if (query && query !== lastSearchTerm) {
      setLastSearchTerm(query);
      dispatch(setTerm(query));
      dispatch(fecthAsyncItems(query));
    }
  }, [dispatch, location.search, lastSearchTerm]);

  return (
    <>
      {loading === HTTP_STATUS.PENDING && <Loading />}
      {loading === HTTP_STATUS.FULFILLED && <ItemsList />}
      {loading === HTTP_STATUS.REJECTED && <ErrorComponent />}
    </>
  );
};

export default Results;
