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


export const 基本用法 = () => <Pagination />;