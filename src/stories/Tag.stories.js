import React from "react";
import {withKnobs, boolean} from "@storybook/addon-knobs";
import Tag from "../components/tag";

export default {
    component: Tag,
    title: 'Tag',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
}

export const 基本用法 = () => {
    return <>
        <Tag color={'#f5222d'}>
            标签
        </Tag>
        <Tag color={'#2f54eb'}>
            标签
        </Tag>
        <Tag color={'#13c2c2'}>
            标签
        </Tag>
        <Tag color={'#52c41a'}>
            标签
        </Tag>
        <Tag color={'#722ed1'}>
            标签
        </Tag>
        <Tag color={'#1890ff'}>
            标签
        </Tag>
        <Tag color={'#eb2f96'}>
            标签
        </Tag>
        <Tag color={'#faad14'}>
            标签
        </Tag>
        <Tag color={'#a0d911'}>
            标签
        </Tag>
        </>
}


