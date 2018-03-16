import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './job-start.css';

const JobStartComponent = function (props) {
    const {
        active,
        className,
        onClick,
        title,
        ...componentProps
    } = props;
    return (
        <a href="javascript:;" onClick={onClick} title={title}>JobStart</a>
    );
};
JobStartComponent.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string
};
JobStartComponent.defaultProps = {
    active: false,
    title: 'JobStart'
};
export default JobStartComponent;
