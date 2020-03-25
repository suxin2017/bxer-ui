import React from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";
import Calendar from "../components/datepicker/calendar";
import DatePicker from '../components/datepicker/index'
export default {
    component: DatePicker,
    title: 'DatePicker',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const test = ()=>{
    const year = text('currentYear','2019');
    const month = text('currentMonth','10');
    return <div>
        年：{year}<br/>
        月: {month}
        <Calendar date={{
            currentYear:year,
            currentMonth:month,
        }}/>
    </div>
}
export const 基本用法 = () => <DatePicker/>


