import React from "react";
import styled from "styled-components";

import { Colors } from "../../types/colors";
import { colorValueMapper } from "../../utils/colors";

export interface ButtonProps {
  label: string;
  color: Colors;
}

export default function Button({
  label,
  color = "blue",
}: ButtonProps): JSX.Element {
  return (
    <PressButton
      style={{
        backgroundColor: `hsl(${colorValueMapper[color].hs},50%)`,
        color: colorValueMapper[color].text,
      }}
    >
      {label}
    </PressButton>
  );
}

const PressButton = styled.button`
  outline: none;
  padding: 15px;
  min-height: 25px;
  min-width: 100px;
  border: 1px solid #fff;
  box-shadow: inset -1px -1px 0px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  :active {
    box-shadow: inset -1px 1px 0 5px rgba(0, 0, 0, 0.3);
  }
`;
