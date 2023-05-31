import React from "react";
import { type Meta, type StoryFn } from "@storybook/react";
import DatePicker from "./DatePicker";

// You can learn about this: https://storybook.js.org/docs/react/writing-stories/introduction

const story: Meta<typeof DatePicker> = {
  title: "DataPicker",
  component: DatePicker,
};

const Template: StoryFn<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  minDate: new Date(2023, 4, 1),
  maxDate: new Date(2023, 7, 7),
  showWeekends: false,
};

export default story;
