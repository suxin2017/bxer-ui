import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";

import Checkbox from "../components/checkbox";
import CheckboxGroup from "../components/checkbox/checkboxGroup";
import {set} from "../components/form/util";

export default {
    component: CheckboxGroup,
    title: 'CheckboxGroup',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
    subcomponents:{Checkbox},
}


export const 复选框组 = () => {
    return <CheckboxGroup onChange={action('复选框发生变化')}>
        <Checkbox
            value={'xiaoxin1'}>蜡笔小新</Checkbox>
        <Checkbox
            value={'xiaoxin2'}>风间</Checkbox>
    </CheckboxGroup>
};


export const 基本用法 = () => {
    const label = 'checked';
    const defaultValue = true;
    const groupId = 'GROUP-ID1';

    const value = boolean(label, defaultValue, groupId);
   return <Checkbox checked={value}
                    value={'xiaoxin'}
                    onChange={action('checkbox change')}>蜡笔小新</Checkbox>;
}

export const 半选 = () => {
    return <Checkbox
        value={'xiaoxin1'} indeterminate>蜡笔小新</Checkbox>

};




export const 自定义全部 = () => {
    const [all, setAll] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false);
    return <div>
        <Checkbox value={'all'} indeterminate={indeterminate}
                  checked={all}>全部</Checkbox>
        <CheckboxGroup onChange={(checks) => {
            if (checks.length === 2) {
                setIndeterminate(false)
                setAll(true)
            } else if (checks.length >= 1) {
                setIndeterminate(true)
            } else {
                setIndeterminate(false)
                setAll(false)
            }
        }}><Checkbox
            value={'xiaoxin1'}>蜡笔小新</Checkbox>
            <Checkbox
                value={'xiaoxin2'}>风间</Checkbox>
        </CheckboxGroup>
    </div>
};
export const 垂直排列 = () => {
    const label = 'checked';
    const defaultValue = true;
    const groupId = 'GROUP-ID1';

    const value = boolean(label, defaultValue, groupId);
    return <CheckboxGroup row><Checkbox
        value={'xiaoxin1'}>蜡笔小新</Checkbox>
        <Checkbox
            value={'xiaoxin2'}>风间</Checkbox>
    </CheckboxGroup>;
}
