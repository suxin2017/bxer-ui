import React from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";

import Button from "../components/button";

export default {
    component: Button,
    title: 'Button',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
}


/**
 * 123123
 * @returns {*}
 */
export const 示例 = () => {
    return <div>
        <Button>{text('value', '基本按钮')}</Button>
        <Button type={'minor'}>{text('value', '基本按钮')}</Button>
        <Button
            disabled={boolean('disabled', true)}>{text('value', '基本按钮')}</Button>
        <Button icon={text('icon', "home-line")}>
            {text('value', '基本按钮')}</Button>
    </div>
};

export const 基本按钮 = () => {
    return <Button icon={text('icon', "home-line")}>
        {text('value', '基本按钮')}</Button>
}
export const 次要按钮 = () => {
    return <Button type={'minor'} icon={text('icon', "home-line")}>
        {text('value', '基本按钮')}</Button>
}

export const 禁用按钮 = () => {
    return <Button
        disabled={boolean('disabled', true)}>{text('value', '基本按钮')}</Button>

}

export const Icon按钮 = () => {
    return <Button icon={text('icon', "home-line")}>
        {text('value', '基本按钮')}</Button>
}

export const Icon无标题按钮 = () => {
    return <Button icon={text('icon', "home-line")}></Button>
}