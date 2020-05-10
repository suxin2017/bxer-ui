import React from "react";
import { withKnobs, text} from "@storybook/addon-knobs";
import MarkdownEditer from "../components/markdownEditer";


export default {
    component:MarkdownEditer,
    title:'MarkdownEditer',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = ()=> <MarkdownEditer ></MarkdownEditer>
