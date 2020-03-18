import React from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";
import Select from "../components/select";
import Option from "../components/select/option";


export default {
    component: Select,
    title: 'Select',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = () => <Select>
    <Option value={'123'}/>
    <Option value={'456'}/>
    <Option value={'789'}/>
</Select>

