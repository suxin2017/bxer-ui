import React from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, boolean, radios} from "@storybook/addon-knobs";

import Tree from "../components/tree";
import TreeNode from "../components/tree/TreeNode";

export default {
    component: Tree,
    title: 'Tree',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
    subcomponents: {TreeNode}
}

const data = [
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
                children: [{
                    title: <span style={{color: '#1890ff'}}>sss</span>,
                    key: '0-0-1-0'
                }],
            },
        ],
    },
];

let treeStyle = {
    maxWidth: '120px'
}
export const 基本用法 = () => <Tree style={treeStyle} data={data}/>;


export const 带Icon = () => {
    return <Tree style={treeStyle} data={data}
                 icon={(dataItem) => {
                     if (dataItem.children) {
                         if (dataItem.open) {
                             return 'arrow-down-s-fill'
                         } else {
                             return 'arrow-right-s-fill'
                         }
                     }
                 }}>
    </Tree>;
}

export const 目录 = () => {
    return <Tree style={treeStyle} data={data}
                 icon={(dataItem) => {
                     if (dataItem.children) {
                         if (dataItem.open) {
                             return 'folder-line'
                         } else {
                             return 'folder-2-line'
                         }
                     }
                     return 'file-line'

                 }}>
    </Tree>;
}

export const 展开方式 = () => <Tree
    onSelect={action('树节点选择')}
    expandType={radios('展开方式', {
        all: 'all',
        title: 'title',
        icon: 'icon'
    }, 'title')}
    style={treeStyle} data={data} icon={(dataItem) => {
    if (dataItem.children) {
        if (dataItem.open) {
            return 'folder-line'
        } else {
            return 'folder-2-line'
        }
    }
    return 'file-line'

}}>
</Tree>;
