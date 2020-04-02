import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './option.sass'
import Icon from "../icon";

Option.propTypes = {
    /**
     * 是否被选中
     */
    selected:PropTypes.bool,
    /**
     *
     */
    value:PropTypes.string,
};

function Option(props) {
    const {selected,key,value,children} = props;
    let optionClassName = classNames('bxer-option',
        {
            "bxer-option__selected":selected,
        });

    return (
        <li className={optionClassName} key={key||value}  data-value={key||value}
             {...props} >
            <div className={"bxer-option__content"}>
                {children||key||value}
            </div>
            {selected && <Icon type={'check-line'} />}
        </li>
    );
}


export default Option;
