import React from "react";
import {action} from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import {Row,Col} from '../components/layout'

export default {
    component:Row,
    subcomponents:{'Col':Col},
    title:'Layout',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

 const SpanData = ({color,children})=>{
    return <div style={{height:200,backgroundColor:color}}>{children}</div>
};
const gray = 'rgba(0,0,0,.1)';
const grayDeep = 'rgba(0,0,0,.2)';

export const 基本用法 = ()=>{
return <Row >
    <Col span={number('base_col_tow',2)}>
        <SpanData color={gray}>span-2</SpanData></Col>
    <Col span={number('base_col_ten',10)}>
        <SpanData color={grayDeep}>span-10</SpanData>
    </Col>

</Row>

}


export const 通过gutter带间距 = ()=>{
    return <Row gutter={32}>
        <Col span={number('gutter_span_ten',8)}>
            <SpanData color={gray}>span-8</SpanData></Col>
        <Col span={number('gutter_span_four',4)}>
            <SpanData color={grayDeep}>span-4</SpanData>
        </Col>

    </Row>

}

export const 流布局 = ()=>{
    return <Row gutter={8} fluid>
        <Col >
            <SpanData color={gray}>span-8</SpanData></Col>
        <Col >
            <SpanData color={grayDeep}>span-4</SpanData>
        </Col>

    </Row>

}

