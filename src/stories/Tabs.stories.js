import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";

import Icon from "../components/icon";
import TabPane from "../components/tabs/TabPane";
import Tabs from "../components/tabs";
import {set} from "../components/form/util";

export default {
    component: Tabs,
    title: 'Tabs',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
    subcomponents:{TabPane}
}

export const 基本用法 = () => <Tabs
    onChange={action('onChang')}
>
    <TabPane value={1} tabName={'tab1'}>tab1</TabPane>
    <TabPane value={2} tabName={'tab2'}>tab2</TabPane>
</Tabs>;

export const 默认值 = () => <Tabs
    onChange={action('onChang')}
    defaultActiveKey={number('defaultActiveKey', 1)}>
    <TabPane value={1} tabName={'tab1'}>tab1</TabPane>
    <TabPane value={2} tabName={'tab2'}>tab2</TabPane>
</Tabs>;

export const 可改变的 = () => {
    const [active, setActive] = useState(1);
    return <Tabs onChange={key => {
        action('onChang', key)
        setActive(key)
    }
    } activeKey={number('activeKey', active)}>
        <TabPane value={1} tabName={'tab1'}>tab1</TabPane>
        <TabPane value={2} tabName={'tab2'}>tab2</TabPane>
    </Tabs>
};
