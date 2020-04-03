import React from "react";
import { withKnobs, boolean} from "@storybook/addon-knobs";
import {action} from '@storybook/addon-actions';
import Switch from "../components/switch";
import TimelineItem from "../components/TimeLine/timelineItem";
import Timeline from "../components/TimeLine";

export default {
    component:Timeline,
    title:'Timeline',
    excludeStories: /.*Data$/,
    decorators: [withKnobs],
    subcomponents:{TimelineItem}
}

export const 基本用法 = ()=> {
    return <Timeline style={{width:'200px'}}>
        <TimelineItem>
            Solve initial network problems 1

            Solve initial network problems 2

            Solve initial network problems 3 2015-09-01</TimelineItem>
        <TimelineItem > Solve initial network problems 1

            Solve initial network problems 2

            Solve initial network problems 3 2015-09-01</TimelineItem>
        <TimelineItem > Solve initial network problems 1

            Solve initial network problems 2

            Solve initial network problems 3 2015-09-01</TimelineItem>
        </Timeline>
}


