import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const ViewContainer = ({ children }) => (
  <main className={styles.flex}>
    <div className={styles.flexContainer}>{children}</div>
  </main>
);

ViewContainer.propTypes = {
  children: PropTypes.node,
};

export default ViewContainer;
