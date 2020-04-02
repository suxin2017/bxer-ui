import React from "react";
import {action} from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import SearchInput from "../components/searchInput";

export default {
    component:SearchInput,
    title:'SearchInput',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
}


/**
 * 123123
 * @returns {*}
 */
export const 示例 = ()=>{
    return  <div>
       <SearchInput onChange={action('搜索值改变')} onSearch={action('搜索回调')}/>

    </div>
};
