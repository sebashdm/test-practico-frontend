import React from "react";
import PropTypes from "prop-types";
import Styles from "./styles.module.scss";

const Paragraphs = ({ string }) => {
  const arr = string
    .split("\n")
    .filter((el) => !!el)
    .map((el, i) => (
      <p key={i} className={Styles.paragraph} data-testid={`test-${i}`}>
        {el}
      </p>
    ));

  return arr;
};

export default Paragraphs;

Paragraphs.propTypes = {
  string: PropTypes.string.isRequired,
};
