import React from "react";
import {action} from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Popover from "../components/popover";

export default {
    component:Popover,
    title:'Popover',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = ()=> <div style={{
   margin:'400px'
}}>
    <div style={{margin:'40px'}}>
    <Popover placement={'up'}><span >up</span></Popover>
    </div>
    <div style={{margin:'40px'}}>
        <Popover placement={'down'}><span >down</span></Popover>

    </div>
    <div style={{margin:'40px'}}>
        <Popover placement={'left'}><span >left</span></Popover>

    </div>
    <div style={{margin:'40px'}}>
        <Popover placement={'right'}><span >right</span></Popover>

    </div>

</div>

export const 滚动条 = ()=> <div style={{
    width:'120vw',
    height:'120vh',
    margin:'20vw'
}}>
    <div style={{margin:'40px'}}>
        <Popover placement={'up'}><span >up</span></Popover>
    </div>
    <div style={{margin:'40px'}}>
        <Popover placement={'down'}><span >down</span></Popover>

    </div>
    <div style={{margin:'40px'}}>
        <Popover placement={'left'}><span >left</span></Popover>

    </div>
    <div style={{margin:'40px'}}>
        <Popover placement={'right'}><span >right</span></Popover>

    </div>

</div>

