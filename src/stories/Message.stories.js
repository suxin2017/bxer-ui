import React from "react";
import {action} from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Button from "../components/button";
import Message, {message} from "../components/message";

export default {
    component:Message,
    title:'Message',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
}


/**
 * 123123
 * @returns {*}
 */
export const 示例 = ()=>{
    return  <div>
        <Button onClick={()=>{
            message.success('成功')
        }}>{ text('success','成功')}</Button>
        <Button onClick={()=>{
            message.info('信息提示')
        }}>{ text('info','信息')}</Button>
        <Button onClick={()=>{
            message.error('错误警告')
        }}>{ text('warning','警告')}</Button>

    </div>
};
