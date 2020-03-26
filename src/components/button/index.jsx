import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.sass'
import Icon from "../icon";

Button.propTypes = {
    /**
      两种类型
     */
    type: PropTypes.oneOf(["primary", "minor","ghost"]),
    /**
     * 图标
     */
    icon: PropTypes.string,
};

Button.defaultProps = {
    type: 'primary',
}

/**
 * 按钮组件
 */
function Button(props) {
    const {type, icon, children,className,htmltype='button', ...other} = props;


    const btnClassNames = classNames('bxer-btn', {
        [`bxer-btn--${type}`]:type,
        'bxer-btn--icon':icon && children,
    },className);


    return (
        <button  className={btnClassNames} {...other} type={htmltype} >
            {icon && <Icon type={icon}/>}
            <span>{children}</span>
        </button>
    );
}

export default Button;
