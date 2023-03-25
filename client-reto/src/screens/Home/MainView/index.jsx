import React from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

const MainView = ({ children }) => (
  <main className={styles.flex}>
    <div className={styles.flexContainer}>{children}</div>
  </main>
);

MainView.propTypes = {
  children: PropTypes.node,
};

export default MainView;
