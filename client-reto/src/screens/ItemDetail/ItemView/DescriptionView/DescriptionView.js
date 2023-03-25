import React from "react";
import PropTypes from "prop-types";
import Description from "../Description";
import styles from "./styles.module.scss";

const DescriptionView = ({ description }) => {
  return (
    <div className={styles.itemDescription}>
      <h3>Descripción del producto</h3>
      <Description string={description} />
    </div>
  );
};

export default DescriptionView;

DescriptionView.propTypes = {
  description: PropTypes.string.isRequired,
};
