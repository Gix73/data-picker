import React from "react";
import { type Meta, type StoryFn } from "@storybook/react";
import Button from "./Button";

// You can learn about this: https://storybook.js.org/docs/react/writing-stories/introduction

const obj: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  handleClick: () => {
    alert("primary");
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  handleClick: () => {
    alert("Secondary");
  },
};

export default obj;
