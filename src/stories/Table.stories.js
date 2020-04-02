import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, array, object, number} from "@storybook/addon-knobs";

import Table from "../components/table";
import Button from "../components/button";
import Pagination from "../components/pagination";

export default {
    component: Table,
    title: 'Table',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}
const columns = [
    {
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
];

const name = ['张三', '李四', '王五', '赵六', '不七', '知八', '道九', '了十'];
const age = [18, 20, 10, 23, 24, 56, 34, 32, 13, 76];
const address = ['北京', '上海', '深圳', '南京', '杭州', '山东', '新疆', '辽宁'];
const sex = ['男', '女'];

const data = Array(7).fill(1).map((_, index) => {
    return {
        id: index,
        name: name[index],
        age: age[index],
        address: address[index],
        sex: sex[index % 2],
    }
});


export const 基本用法 = () => <Table columns={[...object('columns', columns), {
    title: '操作',
    dataKey: 'option',
    render: (text, index, item) => {
        return <div>
                    <span style={{marginRight: '20px'}}><Button
                        style={{padding: 0, height: 'initial'}}
                        type={"ghost"}
                        onClick={() => {
                            console.log(123)
                            action('编辑')(text, index, item)
                        }}>编辑</Button></span>
            <span><Button
                style={{padding: 0, height: 'initial'}}
                type={"ghost"} onClick={() => {
                action('删除')(text, index, item)
            }}>删除</Button></span>
        </div>
    }
}]} data={object('data', data)}/>;


export const 分页表格 = () => {
    const [current, setCurrent] = useState(1);
    const optionColumn = {
        title: '操作',
        dataKey: 'option',
        render: (text, index, item) => {
            return <div>
                    <span style={{marginRight: '20px'}}><Button
                        style={{padding: 0, height: 'initial'}}
                        type={"ghost"}
                        onClick={() => {
                            console.log(123)
                            action('编辑')(text, index, item)
                        }}>编辑</Button></span>
                <span><Button
                    style={{padding: 0, height: 'initial'}}
                    type={"ghost"} onClick={() => {
                    action('删除')(text, index, item)
                }}>删除</Button></span>
            </div>
        }
    };
    return (
        <>
            <Table
                columns={[...object('columns', columns), optionColumn]}
                data={data.slice((current - 1) * 3, (current - 1) * 3 + 3)}/>
            <Pagination dataTotal={data.length} pageSize={3}
                        onChange={(page) => {
                            setCurrent(page)
                        }}/>
        </>
    )
};
