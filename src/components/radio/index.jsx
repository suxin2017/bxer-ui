import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.sass'

Radio.propTypes = {
    value: PropTypes.string,
    checked: PropTypes.bool,
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
        <label className={radioClassName} onChange={(e) => {
            setChecked(true);
            onChange(e);
        }}>
            <input type={'radio'} value={value} checked={checked}/>
            <span className="bxer-radio__status"></span>
            <span className="bxer-radio__text">{children}</span>
        </label>
    );
}

export default Radio;