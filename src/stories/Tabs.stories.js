import React from "react";
import {action} from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Icon from "../components/icon";
import TabPane from "../components/tabs/TabPane";
import Tabs from "../components/tabs";

export default {
    component:Tabs,
    title:'Tabs',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = ()=><Tabs >
    <TabPane value={1} tabName={'tab1'}>tab1</TabPane>
    <TabPane value={2} tabName={'tab2'}>tab2</TabPane>
</Tabs>
