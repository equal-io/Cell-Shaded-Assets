import { Colors } from "../types/colors";
import { Theme } from "../types/theme";

const theme: Theme = {
  dark: {
    text: "#00000099",
  },
  light: {
    text: "#FFFFFFCC",
  },
};

export const colorValueMapper: {
  [Property in Colors]: { hs: string; text: string };
} = {
  blue: { hs: "220,80%", text: theme.light.text },
  red: { hs: "0,80%", text: theme.light.text },
  green: { hs: "100,80%", text: theme.light.text },
  orange: { hs: "40,80%", text: theme.light.text },
  yellow: { hs: "60,80%", text: theme.dark.text },
  pink: { hs: "330,80%", text: theme.light.text },
  purple: { hs: "280,80%", text: theme.light.text },
};
