import React from 'react';
import PropTypes from 'prop-types';
import './index.sass'
import Icon from "../icon";
Tag.propTypes = {
    /**
     * 显示内容
     */
    children:PropTypes.element,
    /**
     * 背景颜色
     */
    color:PropTypes.oneOf(["#f5222d","#fa541c","#fa8c16","#faad14","#a0d911","#52c41a"
    ,"#13c2c2","#1890ff","#2f54eb","#722ed1","#eb2f96"])
};

function Tag({children,color}) {
    return (

        <div className={'bxer-tag'} style={{backgroundColor:color,borderColor:color}}>
            {children}
        </div>
    );
}

export default Tag;
