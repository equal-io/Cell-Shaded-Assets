import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Orb from "./Orb";

export default {
  title: "Cell Shaded Library/Assets/Orb",
  component: Orb,
} as ComponentMeta<typeof Orb>;

const Template: ComponentStory<typeof Orb> = (args) => <Orb {...args} />;

export const ExampleOrb = Template.bind({});
