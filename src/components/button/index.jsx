import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.sass'
import Icon from "../icon";

Button.propTypes = {
    /**
     类型
     */
    type: PropTypes.oneOf(["primary", "minor"]),
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
    const {type, size, icon, children,htmltype='button', ...other} = props;


    const btnClassNames = classNames('bxer-btn', {
        [`bxer-btn--${size}`]: size,
        [`bxer-btn--${type}`]:size,
        'bxer-btn--icon':icon && children,
    });


    return (
        <button  className={btnClassNames} {...other} type={htmltype} >
            {icon && <Icon type={icon}/>}
            <span>{children}</span>
        </button>
    );
}

export default Button;