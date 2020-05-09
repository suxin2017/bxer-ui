import React from "react";
import { withKnobs, text} from "@storybook/addon-knobs";
import InfiniteScroll from "../components/infiniteScroll";


export default {
    component:InfiniteScroll,
    title:'InfiniteScroll',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = ()=> <InfiniteScroll ></InfiniteScroll>
