import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './calendar.sass'
import Icon from "../icon";

Calendar.propTypes = {

};

function Calendar(props) {
    const {selected,key,value,children} = props;
    let optionClassName = classNames('bxer-calendar',
        {
            "bxer-option__selected":selected,
        });

    return (
       123
    );
}


export default Calendar;