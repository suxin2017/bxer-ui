import React from "react";
import {action} from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Tree from "../components/tree";

export default {
    component:Tree,
    title:'Tree',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

const data =  [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
            },
        ],
    },
];

export const 基本用法 = ()=><Tree data={data} >
</Tree>


export const 带Icon = ()=><Tree data={data} icon={(dataItem)=>{
    if(dataItem.children){
        if(dataItem.open ){
            return 'arrow-down-s-fill'
        }else{
            return 'arrow-right-s-fill'
        }
    }
}} >
</Tree>;

export const 目录 = ()=><Tree data={data} icon={(dataItem)=>{
    if(dataItem.children){
        if(dataItem.open ){
            return 'folder-line'
        }else{
            return 'folder-2-line'
        }
    }
        return 'file-line'

}} >
</Tree>