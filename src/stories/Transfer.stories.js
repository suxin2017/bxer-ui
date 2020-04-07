import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Checkbox from "../components/checkbox";
import CheckboxGroup from "../components/checkbox/checkboxGroup";
import { set } from "../components/form/util";
import Transfer from "../components/transfer";

export default {
  component: Transfer,
  title: "Transfer",
  excludeStories: /.*Data$/,
  decorators: [withKnobs],
  subcomponents: { Checkbox },
};

export const 基本用法 = () => {
  const label = "checked";
  const defaultValue = true;
  const groupId = "GROUP-ID1";
  const sourceData = [
    {
      value: "1",
      text: "园长老大",
    },
    {
      value: "2",
      text: "美伢",
    },
    {
      value: "3",
      text: "风间",
    },
    {
      value: "4",
      text: "阿呆",
    },
    {
      value: "5",
      text: "妮妮",
    },
    {
      value: "6",
      text: "小白",
    },
  ];
  return (
    <Transfer
      onChange={action("穿梭框选择")}
      height={200}
      sourceData={sourceData}
    ></Transfer>
  );
};
