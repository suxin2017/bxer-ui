import React from "react";
import {action} from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import FileUpload from "../components/fileUpload";

export default {
    component:FileUpload,
    title:'FileUpload',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
}


/**
 * 123123
 * @returns {*}
 */
export const 示例 = ()=>{
    return  <div>
        <FileUpload/>
    </div>
};
