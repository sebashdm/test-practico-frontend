import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fecthAsyncItemsDetail,
  getSelectedItem,
} from "../../redux/items/itemsSlice";
import ItemView from "./ItemView";
import PathWay from "../../components/PathWay";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedItem);

  useEffect(() => {
    dispatch(fecthAsyncItemsDetail(id));
  }, [dispatch, id]);

  return (
    data?.categories?.length > 0 && <PathWay PathWay={data.categories} />,
    data?.item?.id && <ItemView product={data.item} />
  );
};

export default Details;
