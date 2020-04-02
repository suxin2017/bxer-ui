import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'remixicon/fonts/remixicon.css'
import './index.sass';

Icon.propTypes = {
    /**
     * 配置详情参考开源字体库 remixicon
     * (https://remixicon.cn/)[https://remixicon.cn/]
     */
    type:PropTypes.string.isRequired,
};


function Icon({type,className,...other}) {
    const iconClassName = classNames(
        'bxer-icon',
        `ri-${type}`,
        className
    )
    return (
        <i className={iconClassName} {...other}/>
    );
}

export default Icon;
