import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Panel.module.css"

const Panel = ({ children }) => (
    <div className={styles.container}>
        { children }
    </div>
    
);

Panel.defaultProps = {
    children: [],
};

Panel.propTypes = {
    children: PropTypes.node,
};

export default Panel 