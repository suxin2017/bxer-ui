import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.sass'

Radio.propTypes = {
    /**
     * 单选组对应的key
     */
    value: PropTypes.string,
    /**
     * 是否勾选
     */
    checked: PropTypes.bool,
    /**
     * 勾选回调
     */
    onChange: PropTypes.func
};

function Radio(props) {
    const {
        value, children, onChange = () => {
        }
    } = props;
    const [checked, setChecked] = useState(false);

    const radioClassName = classNames('bxer-radio');

    useEffect(() => {
        setChecked(props.checked)
    }, [props.checked]);

    return (
        <label className={radioClassName} tabIndex={checked?-1:0}>
            <input  onChange={(e) => {
                setChecked(true);
                onChange(e);
            }} type={'radio'} value={value} checked={checked}/>
            <span className="bxer-radio__status"></span>
            <span className="bxer-radio__text">{children}</span>
        </label>
    );
}

export default Radio;
