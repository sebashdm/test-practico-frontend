import React from "react";
import { useSelector } from "react-redux";
import { getAllItems } from "../../../redux/items/itemsSlice";
import PathWay from "../../../components/PathWay";
import ItemCard from "../../../components/ItemCard";
import PropTypes from "prop-types";

const ItemList = () => {
  const itemsData = useSelector(getAllItems);
  const { items } = itemsData;

  return (
    <>
      {items.categories?.length > 0 && <PathWay PathWay={items.categories} />}
      {items.items?.length > 0 && (
        <main>
          {items.items?.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </main>
      )}
    </>
  );
};

export default ItemList;

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
