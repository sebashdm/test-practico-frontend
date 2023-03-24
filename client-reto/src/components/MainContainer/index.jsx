import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles.module.scss';

const Container = ({ children }) => {
    return <div className={Styles.container}>{children}</div>;
};

export default Container;

Container.propTypes = {
    children: PropTypes.node,
};
