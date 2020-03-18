import React from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";

import FormItem from "../components/form/FormItem";
import Input from "../components/input";
import Select from "../components/select";
import CheckboxGroup from "../components/checkbox/checkboxGroup";
import Checkbox from "../components/checkbox";
import RadioGroup from "../components/radio/radioGroup";
import Radio from "../components/radio";
import Option from "../components/select/option";
import Button from "../components/button";

export default {
    component: FormItem,
    title: 'Form',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = () => <div style={{width:'300px'}}>
    <FormItem wrapperSpan={{span:8}}
              labelSpan={{span:4}}
              name='输入'><Input/></FormItem>
    <FormItem wrapperSpan={{span:8}}
              labelSpan={{span:4}}
              name='选择'><Select>
        <Option value="苹果">苹果</Option>
        <Option value="西瓜">西瓜</Option>
        <Option value="西红柿">西红柿</Option>

    </Select></FormItem>
    <FormItem wrapperSpan={{span:8}}
              labelSpan={{span:4}}
              name='复选框'><CheckboxGroup>
        <Checkbox value={'test'}>北京</Checkbox>
        <Checkbox value={'test1'}>上海</Checkbox>
    </CheckboxGroup></FormItem>
    <FormItem wrapperSpan={{span:8}}
              labelSpan={{span:4}}
              name='单选'><RadioGroup>
        <Radio value={'test'}>北京</Radio>
        <Radio value={'test1'}>上海</Radio>
    </RadioGroup></FormItem>
    <FormItem wrapperSpan={{span:8}}
              labelSpan={{span:4}}
              name='单选'>
        <Button >确定</Button>
        <Button type={'minor'}>取消</Button>

    </FormItem>
</div>

