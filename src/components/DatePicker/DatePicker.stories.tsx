import React from "react";
import { type Meta, type StoryFn } from "@storybook/react";
import DatePicker from "./DatePicker";
import { HOLIDAYS } from "../../constants/date";

// You can learn about this: https://storybook.js.org/docs/react/writing-stories/introduction

const story: Meta<typeof DatePicker> = {
  title: "DataPicker",
  component: DatePicker,
};

const Template: StoryFn<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  minDate: new Date(2020, 4, 1),
  maxDate: new Date(2025, 5, 20),
  title: "Calendar",
  holidays: HOLIDAYS,
  showWeekends: true,
  withTodo: true,
  type: "month",
};

export default story;
