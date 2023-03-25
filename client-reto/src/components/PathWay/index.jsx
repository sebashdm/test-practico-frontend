import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const PathWay = ({ PathWay }) => {
  return (
    <ul className={styles.PathWay} data-testid="PathWay">
      {PathWay?.map((category) => (
        <li key={category}>
          <a href="#0">{category}</a>
        </li>
      ))}
    </ul>
  );
};

export default PathWay;

PathWay.propTypes = {
  PathWay: PropTypes.arrayOf(PropTypes.string).isRequired,
};
