import React from "react";
import { type Meta, type StoryFn } from "@storybook/react";
import RangePicker from "./RangePicker";

// You can learn about this: https://storybook.js.org/docs/react/writing-stories/introduction

const story: Meta<typeof RangePicker> = {
  title: "RangePicker",
  component: RangePicker,
};

const Template: StoryFn<typeof RangePicker> = (args) => (
  <RangePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  minDate: new Date(2020, 4, 1),
  maxDate: new Date(2025, 5, 20),
  startDate: new Date(2023, 5, 6),
  endDate: new Date(2023, 5, 9),
  showWeekends: true,
  withTodo: true,
  type: "month",
};

export default story;
