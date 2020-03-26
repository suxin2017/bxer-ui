import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.sass'

Checkbox.propTypes = {
    /**
     * 在checkboxGroup 中返回的value
     */
    value: PropTypes.string,
    /**
     * 是否选中
     */
    checked: PropTypes.bool,
    /**
     * 是否默认选择，当第一次挂载时生效
     */
    defaultChecked: PropTypes.bool,
    /**
     * 勾选状态改变的会变
     * 返回 check 的状态 true 或者 false
     */
    onChange: PropTypes.func,
    /**
     * 是否半选
     */
    indeterminate: PropTypes.bool,
};

Checkbox.defaultProps = {
    defaultChecked: false,
    indeterminate:false,
    checked:false,
}

function Checkbox(props) {
    const {
        value,
        children,
        onChange ,
        defaultChecked,
        indeterminate,
        checked:propsChecked,
        ...other
    } = props;
    const [checked, setChecked] = useState(false);

    const prefix = 'bxer-checkbox';
    const radioClassName = classNames(prefix);

    useEffect(()=>{
        setChecked(defaultChecked)
    },[])

    useEffect(() => {
        setChecked(propsChecked)
    }, [propsChecked]);


    return (
        <label className={radioClassName} tabIndex={checked ? -1 : 0}
               {...other}
        >
            <input type={'checkbox'} onChange={(e) => {
                setChecked(!checked);
                onChange(e);
            }}
                   value={value}
                   checked={checked}
                   indeterminate={indeterminate.toString()}/>
            <span
                  data-checked={checked}
                  className={`${prefix}__status`}
                  data-indeterminate={indeterminate}
            ></span>
            <span className={`${prefix}__text`}>{children}</span>
        </label>
    );
}

export default Checkbox;
