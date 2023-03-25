import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const ItemCard = ({ item }) => {
  const { picture, title, price, id } = item;

  return (
    <article className={styles.itemCard}>
      <div className={styles.imgContainer}>
        <img src={picture} alt={title} />
      </div>

      <div className={styles.itemContainer}>
        <div className={styles.itemInfo}>
          <p className={styles.itemPrice}>
            ${price.amount.toLocaleString("es-AR")}
          </p>
          <h2 className={styles.itemTitle}>
            <Link to={`/items/${id}`}>
              <span aria-hidden="true"></span>
              {title}
            </Link>
          </h2>
        </div>
        <p className={styles.itemAddress}>{item.address}</p>
      </div>
    </article>
  );
};

export default ItemCard;

ItemCard.propTypes = {
  item: PropTypes.shape({
    address: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      decimals: PropTypes.number.isRequired,
    }),
    free_shipping: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
