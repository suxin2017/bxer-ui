import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, object, boolean, number} from "@storybook/addon-knobs";
import Calendar from "../components/datepicker/calendar";
import DatePicker from '../components/datepicker/index'
export default {
    component: DatePicker,
    title: 'DatePicker',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
    subcomponents:{Calendar}
}
export const 基本用法 = () => {
    return <DatePicker
        value={object('value',{
            year:2019,
            month:10,
            day:28
        })}
        onChange={action('datepicker change')}/>
}

export const 日历 = ()=>{
    const year = number('currentYear',2019);
    const month = number('currentMonth',10);
    const [selectedDate, setSelectedDate] = useState({});
    return <div>
        年：{year}<br/>
        月: {month}<br/>
        选中日期 {JSON.stringify(selectedDate)}

        <Calendar
            onChange={(item)=>{
                setSelectedDate(item)
                action('datapicker')(item)
            }}
            date={{
            currentYear:year,
            currentMonth:month,
        }}/>
    </div>
}



