import React from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";

import Pagination from "../components/pagination";

export default {
    component: Pagination,
    title: 'Pagination',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}


export const 基本用法 = () => <div>
    <Pagination dataTotal={10} />
    <Pagination dataTotal={20} />
    <Pagination dataTotal={30} />
    <Pagination dataTotal={40} />
    <Pagination dataTotal={50} />
    <Pagination dataTotal={60} />
    <Pagination dataTotal={70} />
    <Pagination dataTotal={80} />
    <Pagination dataTotal={90} />
    <Pagination dataTotal={100} />
</div>;

export const 指定页数 = () => <div>
    <Pagination dataTotal={100} current={number('current',2)} />
</div>;

export const 绑定onChange事件 = () => <div>
    <Pagination dataTotal={100} onChange={action('pagination change')} current={number('current',2)} />
</div>;
