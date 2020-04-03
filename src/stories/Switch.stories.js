import React from "react";
import { withKnobs, boolean} from "@storybook/addon-knobs";
import {action} from '@storybook/addon-actions';
import Switch from "../components/switch";

export default {
    component:Switch,
    title:'Switch',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = ()=> <Switch checked={boolean('checked', false)}/>

export const 设置checked = ()=> <Switch checked={boolean('checked', false)}/>
export const 回调 = ()=> <Switch
    onChange={action('checked onchange')}/>
