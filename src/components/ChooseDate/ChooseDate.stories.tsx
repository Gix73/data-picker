import React from "react";
import { type Meta, type StoryFn } from "@storybook/react";
import ChooseDate from "./ChooseDate";

// You can learn about this: https://storybook.js.org/docs/react/writing-stories/introduction

const story: Meta<typeof ChooseDate> = {
  title: "ChooseDate",
  component: ChooseDate,
};

const Template: StoryFn<typeof ChooseDate> = (args) => <ChooseDate {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export default story;
