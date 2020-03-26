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
   margin:'50px'
}}>
        <div style={{margin:'20px'}}>
            <Popover placement={'up'}   content={'up'}><span >up</span></Popover>
        </div>
        <div style={{margin:'20px'}}>
            <Popover placement={'bottom'}  content={'bottom'}><span >bottom</span></Popover>

        </div>
        <div style={{margin:'20px'}}>
            <Popover placement={'left'}  content={'left'}><span >left</span></Popover>

        </div>
        <div style={{margin:'20px'}}>
            <Popover placement={'right'} content={'right'} ><span >right</span></Popover>

        </div>

</div>

export const 滚动条 = ()=> <div style={{
    width:'120vw',
    height:'120vh',
    margin:'20vw'
}}>
    <div style={{margin:'40px'}}>
        <Popover placement={'up'}   content={'up'}><span >up</span></Popover>
    </div>
    <div style={{margin:'40px'}}>
        <Popover placement={'bottom'}  content={'bottom'}><span >bottom</span></Popover>

    </div>
    <div style={{margin:'40px'}}>
        <Popover placement={'left'}  content={'left'}><span >left</span></Popover>

    </div>
    <div style={{margin:'40px'}}>
        <Popover placement={'right'} content={'right'} ><span >right</span></Popover>

    </div>

</div>

export const 触发条件 = ()=> <div style={{
    width:'120vw',
    height:'120vh',
    margin:'20vw'
}}>
    <div style={{margin:'40px'}}>
        <Popover trigger={'click'} content={'click'}><span >click</span></Popover>
    </div>
    <div style={{margin:'40px'}}>
        <Popover trigger={'hover'} content={'hover'}><span >hover</span></Popover>

    </div>
    <div style={{margin:'40px'}}>
        <Popover trigger={'contextMenu'} content={'contextMenu'}><span >contextMenu</span></Popover>

    </div>
    <div style={{margin:'40px'}}>
        <Popover trigger={'focus'} content={'focus'}><input value={'focus'}></input></Popover>

    </div>

</div>

