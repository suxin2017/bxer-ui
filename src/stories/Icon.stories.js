import React from "react";
import { withKnobs, text} from "@storybook/addon-knobs";

import Icon from "../components/icon";

export default {
    component:Icon,
    title:'Icon',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = ()=> <Icon type={text('type',"home-line")}></Icon>
