import React from "react";
import {action} from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Icon from "../components/icon";

export default {
    component:Icon,
    title:'Icon',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = ()=><Icon type={text('type',"home-line")}></Icon>