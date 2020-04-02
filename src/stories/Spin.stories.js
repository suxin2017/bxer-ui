import React from "react";
import {action} from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Spin from "../components/spin";

export default {
    component:Spin,
    title:'Spin',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = ()=><Spin spinning={boolean('是否显示spin',true)}/>;

export const 子元素 = ()=><Spin  spinning={boolean('是否显示spin',true)} >
    <div style={{width:'200px',height:'200px'}}>123</div>
</Spin>
