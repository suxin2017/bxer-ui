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
import Form from "../components/form/form";

export default {
    component: FormItem,
    title: 'Form',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = () => <Form style={{width:'300px'}} onSubmit={action('onSubmit',)}>
    <FormItem wrapperSpan={{span:8}}
              labelSpan={{span:4}}
              label='输入' dataKey={'input'}><Input/></FormItem>
    <FormItem wrapperSpan={{span:8}}
              labelSpan={{span:4}}
              label='输入' dataKey={'input'}><Input/></FormItem>
    <FormItem wrapperSpan={{span:8}}
              labelSpan={{span:4}}
              label='选择'  dataKey={'select'}><Select>
        <Option value="苹果">苹果</Option>
        <Option value="西瓜">西瓜</Option>
        <Option value="西红柿">西红柿</Option>

    </Select></FormItem>
    <FormItem wrapperSpan={{span:8}}
              labelSpan={{span:4}}
              label='复选框'  dataKey={'checkout'}><CheckboxGroup>
        <Checkbox value={'test'}>北京</Checkbox>
        <Checkbox value={'test1'}>上海</Checkbox>
    </CheckboxGroup></FormItem>
    <FormItem wrapperSpan={{span:8}}
              labelSpan={{span:4}}
              label='单选'  dataKey={'radio'}><RadioGroup>
        <Radio value={'test'}>北京</Radio>
        <Radio value={'test1'}>上海</Radio>
    </RadioGroup></FormItem>
    <FormItem wrapperSpan={{span:8}}
              labelSpan={{span:4}}
              label='单选'>
            <Button htmltype={'submit'}>确定</Button>
            <Button type={'minor'}>取消</Button>
    </FormItem>
</Form>

