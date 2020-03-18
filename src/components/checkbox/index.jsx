import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.sass'

Checkbox.propTypes = {
    value: PropTypes.string,
    checked: PropTypes.bool,
};

function Checkbox(props) {
    const {
        value, children, onChange = () => {
        }
    } = props;
    const [checked, setChecked] = useState(false);
    const prifix = 'bxer-checkbox'
    const radioClassName = classNames(prifix);

    useEffect(() => {
        setChecked(props.checked)
    }, [props.checked]);

    return (
        <label className={radioClassName} onChange={(e) => {
            setChecked(true);
            onChange(e);
        }}>
            <input type={'checkbox'} value={value} checked={checked}/>
            <span className={`${prifix}__status`}></span>
            <span className={`${prifix}__text`}>{children}</span>
        </label>
    );
}

export default Checkbox;