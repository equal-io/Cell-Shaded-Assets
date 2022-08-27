import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Cell Shaded Library/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});

HelloWorld.args = {
  label: "Hello World!",
  color: "blue",
};

export const ClickMe = Template.bind({});

ClickMe.args = {
  label: "Click Me!",
  color: "green",
};
