import React from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";

import Table from "../components/table";

export default {
    component: Table,
    title: 'Table',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

const columns = [{
    title: '姓名',
    dataKey: 'name'
},
    {
        title: '年龄',
        dataKey: 'age'
    },
    {
        title: '住址',
        dataKey: 'address'
    },
    {
        title: '性别',
        dataKey: 'sex'
    },
    {
        title: '操作',
        dataKey: 'option',
        render:(text,index,item)=>{
            return <div>
                <span style={{marginRight:'20px'}}><a href='javascript:;'>编辑</a></span>
                <span><a href='javascript:;'>删除</a></span>
            </div>
        }
    }
];

const name = ['张三','李四','王五','赵六','不七','知八','道九','了十'];
const age = [18,20,10,23,24,56,34,32,13,76];
const address = ['北京','上海','深圳','南京','杭州','山东','新疆','辽宁'];
const sex = ['男','女'];

const data = Array(7).fill(1).map((_,index)=>{
    return {
        id:index,
        name:name[index],
        age:age[index],
        address:address[index],
        sex:sex[index%2],
    }
});


export const 基本用法 = () => <Table columns={columns} data={data}/>;