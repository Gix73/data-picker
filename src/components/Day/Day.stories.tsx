import React from "react";
import { type Meta, type StoryFn } from "@storybook/react";
import Day from "./Day";
import Colors from "../../constants/colors";
import Borders from "../../constants/borders";

const story: Meta<typeof Day> = {
  title: "Day",
  component: Day,
};

const Template: StoryFn<typeof Day> = (args) => <Day {...args} />;

export const Default = Template.bind({});

Default.args = {
  date: "0",
  textColor: Colors.BLACK,
  bgColor: Colors.WHITE,
  borderRadius: Borders.DEFAULT,
  handleClick: () => {
    console.log("Clicked");
  },
};

export const Hover = Template.bind({});

Hover.args = {
  date: "0",
  textColor: Colors.BLACK,
  bgColor: Colors.GRAY,
  borderRadius: Borders.ROUNDED,
  handleClick: () => {
    console.log("Clicked");
  },
};

export const Disabled = Template.bind({});

Disabled.args = {
  date: "0",
  textColor: Colors.LIGHT_GREY,
  bgColor: Colors.WHITE,
  borderRadius: Borders.DEFAULT,
  handleClick: () => {
    console.log("Clicked");
  },
};

export const Selected = Template.bind({});

Selected.args = {
  date: "0",
  textColor: Colors.WHITE,
  bgColor: Colors.BLUE,
  borderRadius: Borders.ROUNDED,
  handleClick: () => {
    console.log("Clicked");
  },
};

export const RangeRight = Template.bind({});

RangeRight.args = {
  date: "0",
  textColor: Colors.WHITE,
  bgColor: Colors.BLUE,
  borderRadius: Borders.RIGHT,
  handleClick: () => {
    console.log("Clicked");
  },
};

export const RangeLeft = Template.bind({});

RangeLeft.args = {
  date: "0",
  textColor: Colors.WHITE,
  bgColor: Colors.LIGHT_BLUE,
  borderRadius: Borders.LEFT,
  handleClick: () => {
    console.log("Clicked");
  },
};

export const RangeBtw = Template.bind({});

RangeBtw.args = {
  date: "0",
  textColor: Colors.BLUE,
  bgColor: Colors.VERY_LIGHT_BLUE,
  borderRadius: Borders.DEFAULT,
  handleClick: () => {
    console.log("Clicked");
  },
};

export default story;
