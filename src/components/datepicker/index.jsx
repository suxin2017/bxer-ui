import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Popover from "../popover";
import Icon from "../icon";
import classNames from 'classnames';
import './index.sass'
import Calendar from "./calendar";
import DatepickerHeader, {change_Type} from "./datepickerHeader";
import {defaultDate} from "./util";
import {isEmptyObject} from "../util/type";

DatePicker.propTypes = {
    /**
     * 当前选中日期
     * 配合form
     */
    value: PropTypes.shape({
        year: PropTypes.number,
        month: PropTypes.number,
    }),
    /**
     * 当前选中后修改
     */
    onChange: PropTypes.func
};
DatePicker.defaultProps = {
    onChange: (selectedDate) => {
    },
}

/**
 * 下拉日期选择
 */
function DatePicker(props) {

    const [currentDate, setCurrentDate] = useState({
        year: defaultDate.getFullYear(),
        month: defaultDate.getMonth() + 1,
    });

    const [selectedDate, setSelectedDate] = useState({});

    const {value,onChange: propOnChange} = props;
    const [open, setOpen] = useState(false);
    const [showTitle, setShowTitle] = useState('');
    const prefix = 'bxer-date-picker';
    const selectClassName = classNames(prefix,
        {[`${prefix}__open`]: open});

    useEffect(() => {
        if (!isEmptyObject(selectedDate)) {
            const {year, month, day} = selectedDate;
            setShowTitle(`${year}-${month}-${day}`)
        }
    }, [selectedDate]);

    useEffect(()=>{
        if(!isEmptyObject(value)){
            setCurrentDate(value);
            setSelectedDate(value);
        }
    },[value])


    function handleHeaderChange(type) {
        const {year, month} = currentDate;
        const currDateObj = new Date(year, month)
        if (type == change_Type.left) {
            // 当前月份加一天
            currDateObj.setMonth(currDateObj.getMonth() - 1 - 1);
        } else {
            // 当前月份减一天
            currDateObj.setMonth(currDateObj.getMonth() + 1 - 1);
        }
        setCurrentDate({
            year: currDateObj.getFullYear(),
            month: currDateObj.getMonth() + 1,
        })
    }


    return (
        <div className={selectClassName} onClick={() => {
            setOpen(!open)
        }}>

            <Popover
                className={`${prefix}__popover`}
                trigger={"click"}
                placement={'bottom'}
                open={open}
                onOpen={() => {
                    setOpen(true)
                }}
                onClose={() => {
                    setOpen(false)
                }}
                content={<div>
                    <DatepickerHeader
                        onChange={handleHeaderChange}
                        currentDate={currentDate}/>
                    <Calendar
                        selectedDate={selectedDate}
                        currentDate={currentDate}
                        onChange={(dateItem) => {
                            propOnChange(dateItem);
                            setSelectedDate(dateItem);
                            setOpen(false)
                        }}/>
                </div>}
            >
                <div className={`${prefix}__content`}>
                    <div>{showTitle || '请选择日期'}</div>
                    <Icon type={'arrow-left-s-fill'}></Icon>
                </div>
            </Popover>
        </div>
    );
}

export default DatePicker;
