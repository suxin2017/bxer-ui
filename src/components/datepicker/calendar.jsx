import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './calendar.sass'
import Icon from "../icon";
import {date} from "@storybook/addon-knobs";
import {getDates, isEqual,defaultDate} from "./util";

Calendar.propTypes = {
    /**
     * 当前选中日期
     */
    selectedDate: PropTypes.shape({
        year:PropTypes.number,
        month:PropTypes.number,
        day:PropTypes.number,
    }),

    /**
     * 当前日期
     * 用于生成日期列表
     * 默认是当前日期的年和月
     */

    currentDate: PropTypes.shape({
        year:PropTypes.number,
        month:PropTypes.number,
    }),

    /**
     * 选中日期后的回调
     * (selectedData)=>{}
     */
    onChange:PropTypes.func,

};


Calendar.defaultProps = {
    currentDate:{
        year: defaultDate.getFullYear(),
        month: defaultDate.getMonth(),
    },
    onChange:(selectedDate)=>{},
}

/**
 * 日期选择
 * 选中日期不可控
 */
function Calendar(props) {
    const {
        date: propData,
        currentDate:propCurrentDate,
        selectedDate:propSelectedDate,
        onChange
    } = props;

    /**
     * 当前选中日期
     */
    const [selectedDate, setSelectedDate] = useState({});

    /**
     * 展示的日期
     */
    const [dates, setDates] = useState([]);

    /**
     * 星期
     * @type {string[]}
     */
    let weekTh = ['一', '二', '三', '四', '五', '六', '日'];


    // props 的当前日期变化
    useEffect(()=>{
        if(propCurrentDate){
            setDates(getDates(propCurrentDate.year, propCurrentDate.month))
        }
    },[propCurrentDate]);


    useEffect(() => {
        if (propSelectedDate) {
            setSelectedDate(propSelectedDate);
        }
    }, [propSelectedDate]);

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
                                    setSelectedDate(item)
                                    onChange(item)
                                }
                            }}
                            className={classNames('bxer-calendar__body-col',
                                `bxer-calendar__body-col__${item.type}`,
                                {
                                    'bxer-calendar__body-col__selected':
                                        isEqual(selectedDate, item)
                                }
                            )}
                            key={`${item.year+item.month+item.day}`}>{item.day}</td>
                    })}
                </tr>
            })
        }
        </tbody>
    </table>;
}


export default Calendar;
