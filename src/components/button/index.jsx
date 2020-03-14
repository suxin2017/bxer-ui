import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.sass'
import Icon from "../icon";

Button.propTypes = {
    type: PropTypes.oneOf(["primary", "default"]),
    size: PropTypes.oneOf(["sm", "md"]),
    icon: PropTypes.string,
};

Button.defaultProps = {
    type: 'primary',
    size: 'md'
}

/**
 * 按钮组件
 */
function Button(props) {
    const {type, size, icon, children, ...other} = props;


    const btnClassNames = classNames('bxer-btn', {
        [`bxer-btn--${size}`]: size,
        'bxer-btn--icon':icon && children,
    });


    return (
        <button className={btnClassNames} {...other}>
            {icon && <Icon type={icon}/>}
            <span>{children}</span>
        </button>
    );
}

export default Button;