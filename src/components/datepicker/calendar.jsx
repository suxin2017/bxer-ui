import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './calendar.sass'
import Icon from "../icon";
import {date} from "@storybook/addon-knobs";
import {getDates, isEquel} from "./util";

Calendar.propTypes = {
    /**
     * 当前日期
     *
     */
    date: PropTypes.string,
};


const defaultDate = new Date();

/**
 * 日期选择
 */
function Calendar(props) {
    const {
        date: propsCurrentDay,
        onChange = () => {
        }
    } = props;

    const [currentDay, setCurrentDay] = useState({
        currentYear: defaultDate.getFullYear(),
        currentMonth: defaultDate.getMonth(),
    });

    const [dates, setDates] = useState([]);
    let weekTh = ['一', '二', '三', '四', '五', '六', '日'];
    useEffect(() => {
        if(currentDay){
            setDates(getDates(currentDay.currentYear, currentDay.currentMonth))
        }

    }, [currentDay])


    useEffect(() => {
        setCurrentDay(propsCurrentDay);
    }, [propsCurrentDay]);


    return <table className={'bxer-calendar'}>
        <thead className={'bxer-calendar__head'}>
        <tr>
            {weekTh.map(item => <th key={item}>{item}</th>)}
        </tr>
        </thead>
        <tbody className={'bxer-calendar__body'}>
        {
            [0, 1, 2, 3, 4, 5].map((index) => {
                return <tr key={index} className={'bxer-calendar__body-row'}>
                    {dates.slice(index * 7, index * 7 + 7).map((item) => {
                        return <td
                            onClick={() => {
                                if (item.type === 'current') {
                                    setCurrentDay(item)
                                    onChange(item)
                                }
                            }}
                            className={classNames('bxer-calendar__body-col',
                                `bxer-calendar__body-col__${item.type}`,
                                {
                                    'bxer-calendar__body-col__selected':
                                        isEquel(currentDay, item)
                                }
                            )}
                            key={index}>{item.day}</td>
                    })}
                </tr>
            })
        }
        </tbody>
    </table>;
}


export default Calendar;
