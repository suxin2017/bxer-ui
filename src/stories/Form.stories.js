import React from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, boolean, number, object} from "@storybook/addon-knobs";

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
import DatePicker from "../components/datepicker";

export default {
    component: Form,
    title: 'Form',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
    subcomponents:{FormItem}
}

export const 基本用法 = () => <Form style={{width: '300px'}}
                                onSubmit={action('onSubmit',)}>
    <FormItem wrapperSpan={{span: 8}}
              labelSpan={{span: 4}}
              rules={[{rule: /123/, message: '123'}]}
              label='输入' dataKey={'input'}><Input/></FormItem>

    <FormItem wrapperSpan={{span: 8}}
              labelSpan={{span: 4}}
              rules={[{rule: /西瓜/, message: '为什么不选西瓜'}]}
              label='选择' dataKey={'select'}
              helpTip="给我一个选择还你一个世界"
    ><Select>
        <Option value="苹果">苹果</Option>
        <Option value="西瓜">西瓜</Option>
        <Option value="西红柿">西红柿</Option>
    </Select></FormItem>
    <FormItem
        isRequest
        wrapperSpan={{span: 8}}
        labelSpan={{span: 4}}
        label='复选框' dataKey={'checkout'}><CheckboxGroup>
        <Checkbox value={'test'}>北京</Checkbox>
        <Checkbox value={'test1'}>上海</Checkbox>
    </CheckboxGroup></FormItem>
    <FormItem wrapperSpan={{span: 8}}
              labelSpan={{span: 4}}
              label='单选' dataKey={'radio'}><RadioGroup>
        <Radio value={'test'}>北京</Radio>
        <Radio value={'test1'}>上海</Radio>
    </RadioGroup></FormItem>
    <FormItem wrapperSpan={{span: 8}}
              labelSpan={{span: 4}}
              label='单选' dataKey={'datepicker'}><DatePicker>
    </DatePicker></FormItem>
    <FormItem wrapperSpan={{span: 8}}
              labelSpan={{span: 4}}
              label='单选'>
        <Button htmltype={'submit'}>确定</Button>
        <Button type={'minor'}>取消</Button>
    </FormItem>
</Form>;

export const 表单回显 = () => {
    const formData = object('formData',{
        datepicker: {
            day: 4,
            month: 3,
            type: "current",
            year: 2020,
        },
        checkout:['test'],
        input: "123",
        radio: "test",
        select: "苹果",
    })
    return <Form
        data={formData}
        style={{width: '300px'}}
        onSubmit={action('onSubmit')}>
        <FormItem wrapperSpan={{span: 8}}
                  labelSpan={{span: 4}}
                  rules={[{rule: /123/, message: '123'}]}
                  label='输入' dataKey={'input'}><Input/></FormItem>

        <FormItem wrapperSpan={{span: 8}}
                  labelSpan={{span: 4}}
                  rules={[{rule: /西瓜/, message: '为什么不选西瓜'}]}
                  label='选择' dataKey={'select'}
                  helpTip="给我一个选择还你一个世界"
        ><Select>
            <Option value="苹果">苹果</Option>
            <Option value="西瓜">西瓜</Option>
            <Option value="西红柿">西红柿</Option>
        </Select></FormItem>
        <FormItem
            isRequest
            wrapperSpan={{span: 8}}
            labelSpan={{span: 4}}
            label='复选框' dataKey={'checkout'}><CheckboxGroup>
            <Checkbox value={'test'}>北京</Checkbox>
            <Checkbox value={'test1'}>上海</Checkbox>
        </CheckboxGroup></FormItem>
        <FormItem wrapperSpan={{span: 8}}
                  labelSpan={{span: 4}}
                  label='单选' dataKey={'radio'}><RadioGroup>
            <Radio value={'test'}>北京</Radio>
            <Radio value={'test1'}>上海</Radio>
        </RadioGroup></FormItem>
        <FormItem wrapperSpan={{span: 8}}
                  labelSpan={{span: 4}}
                  label='单选' dataKey={'datepicker'}><DatePicker>
        </DatePicker></FormItem>
        <FormItem wrapperSpan={{span: 8}}
                  labelSpan={{span: 4}}
                  label='单选'>
            <Button htmltype={'submit'}>确定</Button>
            <Button type={'minor'}>取消</Button>
        </FormItem>
    </Form>
};

export const 父组件控制布局 = () => {
    return <Form
        wrapperSpan={{span: 8}}
        labelSpan={{span: 4}}
        style={{width: '300px'}}
        onSubmit={action('onSubmit',)}>
        <FormItem
                  rules={[{rule: /123/, message: '123'}]}
                  label='输入' dataKey={'input'}><Input/></FormItem>

        <FormItem
                  rules={[{rule: /西瓜/, message: '为什么不选西瓜'}]}
                  label='选择' dataKey={'select'}
                  helpTip="给我一个选择还你一个世界"
        ><Select>
            <Option value="苹果">苹果</Option>
            <Option value="西瓜">西瓜</Option>
            <Option value="西红柿">西红柿</Option>
        </Select></FormItem>
        <FormItem
            isRequest

            label='复选框' dataKey={'checkout'}><CheckboxGroup>
            <Checkbox value={'test'}>北京</Checkbox>
            <Checkbox value={'test1'}>上海</Checkbox>
        </CheckboxGroup></FormItem>
        <FormItem
                  label='单选' dataKey={'radio'}><RadioGroup>
            <Radio value={'test'}>北京</Radio>
            <Radio value={'test1'}>上海</Radio>
        </RadioGroup></FormItem>
        <FormItem
                  label='单选' dataKey={'datepicker'}><DatePicker>
        </DatePicker></FormItem>
        <FormItem
                  label='单选'>
            <Button htmltype={'submit'}>确定</Button>
            <Button type={'minor'}>取消</Button>
        </FormItem>
    </Form>
};


