import React from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";

import Checkbox from "../components/checkbox";
import CheckboxGroup from "../components/checkbox/checkboxGroup";

export default {
    component: Checkbox,
    title: 'Checkbox',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = () => <Checkbox
    value={'xiaoxin'}>蜡笔小新</Checkbox>

export const 组 = () => {
    return <CheckboxGroup><Checkbox
        value={'xiaoxin1'}>小新</Checkbox>
        <Checkbox
            value={'xiaoxin2'}>蜡笔</Checkbox>
    </CheckboxGroup>
}