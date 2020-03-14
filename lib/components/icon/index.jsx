import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'remixicon/fonts/remixicon.css'
import './index.css';

Icon.propTypes = {
    type:PropTypes.string.isRequired,

};

function Icon({type,className,...other}) {
    const iconClassName = classNames(
        'bxer-icon',
        `ri-${type}`,
        className
    )
    return (
        <i className={iconClassName} {...other}></i>
    );
}

export default Icon;