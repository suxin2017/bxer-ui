import React from "react";
import {action} from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Spin from "../components/spin";
import Carousel from "../components/carousel";

export default {
    component:Carousel,
    title:'Carousel',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = ()=><Carousel
    width={400}
    height={200}
>
    <div style={{background:'#ff8181',textAlign:'center',fontSize:'30px',color:'#fff',lineHeight:'200px'}}>1</div>
    <div style={{background:'#ffa980',textAlign:'center',fontSize:'30px',color:'#fff',lineHeight:'200px'}}>2</div>
    <div style={{background:'#c0a4ff',textAlign:'center',fontSize:'30px',color:'#fff',lineHeight:'200px'}}>3</div>
</Carousel>;


