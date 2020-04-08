import React, { useState, useEffect } from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Progress from "../components/progress";

export default {
  component: Progress,
  title: "Progress",
  excludeStories: /.*Data$/,
  decorators: [withKnobs],
};

export const 基本用法 = () => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setPercent((percent + 10) % 100);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });
  return <Progress percent={percent} />;
};
