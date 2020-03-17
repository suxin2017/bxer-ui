import React from "react";
import {action} from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Input from "../components/input";

export default {
    component:Input,
    title:'Input',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = ()=><Input onChange={action('input-onchange')}></Input>
export const 禁用 = ()=><Input onChange={action('input-onchange')} value={text('value','disabled')} disabled></Input>