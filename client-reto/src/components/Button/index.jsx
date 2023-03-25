import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Button = ({ text, ...rest }) => {
  return (
    <button {...rest} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
