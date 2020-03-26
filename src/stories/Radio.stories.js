import React from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";

import Radio from "../components/radio";
import RadioGroup from "../components/radio/radioGroup";

export default {
    component: Radio,
    title: 'Radio',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}
export const 组 = () => {
    return <RadioGroup onChange={action('选择回调')}><Radio
        value={'xiaoxin1'}>小新</Radio>
        <Radio
            value={'xiaoxin2'}>蜡笔</Radio>
    </RadioGroup>
}

export const 单个Radio = () => <Radio
    value={'xiaoxin'}>蜡笔小新</Radio>

