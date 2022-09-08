import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Orb from "./Orb";

// import { ReactComponent as Flame } from "./assets/fire.svg";

export default {
  title: "Cell Shaded Library/Assets/Orb",
  component: Orb,
} as ComponentMeta<typeof Orb>;

const Template: ComponentStory<typeof Orb> = (args) => <Orb {...args} />;

export const ExampleOrb = Template.bind({});

export const ColorOrb = Template.bind({});

ColorOrb.args = {
  color: "purple",
};

export const SvgOrb = Template.bind({});
SvgOrb.args = {
  color: "red",
  // svg: <Flame />,
};
