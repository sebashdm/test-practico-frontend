import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HTTP_STATUS } from "../../redux/constants";
import { fecthAsyncItems } from "../../redux/items/itemsSlice";
import ItemsList from "./ItemList";
import { getLoadingStatus } from "../../redux/items/itemsSlice";

const Results = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoadingStatus);

  useEffect(() => {
    dispatch(fecthAsyncItems());
  }, [dispatch]);

  return (
    <>
      {loading === HTTP_STATUS.PENDING && <h1>Cargando...</h1>}
      {loading === HTTP_STATUS.FULFILLED && <ItemsList />}
    </>
  );
};

export default Results;
