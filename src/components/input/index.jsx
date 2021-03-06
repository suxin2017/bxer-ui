import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import './index.sass';
import PropTypes from 'prop-types';


Input.propTypes = {
    /**
     * 输入框的值
     */
    value:PropTypes.string,
    /**
     * 输入框改变的回调
     */
    onChange:PropTypes.func,
    /**
     * 是否禁用
     */
    disabled:PropTypes.bool,
    /**
     * 解决中文输入法获取空格字母问题
     */
    disabledZhInput:PropTypes.bool
};

function Input(props) {
    const {className,onChange,...other} = props;
   const [value,setValue] = useState("");
    const inputClassName = classNames(
        'bxer-input',
       className
    );

   function holdChange(e) {
       const {value} = e.currentTarget;
          setValue(value);
          onChange(value,e)
   }

   useEffect(()=>{
       if(props.value && value!==props.value){
           setValue(props.value)
       }
   },[props.value]);



    return (
        <input
            onChange={holdChange}
            className={inputClassName}
            {...other}
            value={value}
        />
    );
}

export default Input;

