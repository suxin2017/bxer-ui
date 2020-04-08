import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import TextTooltip from "../components/textTooltip";

export default {
  component: TextTooltip,
  title: "TextTooltip",
  excludeStories: /.*Data$/,
  decorators: [withKnobs],
};

export const 基本用法 = () => (
  <TextTooltip length={5}>一二三四五六七八</TextTooltip>
);
