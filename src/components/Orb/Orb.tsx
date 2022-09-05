import React from "react";

import styled from "styled-components";

const OrbContainer = styled.div`
  --color: ${(props) => props.color};
  --l: 50%;
  --color-primary: hsl(var(--color), var(--l));
  --color-primary-lighter: hsl(var(--color), calc(var(--l) + 15%));
  --color-primary-lightest: hsl(var(--color), calc(var(--l) + 40%));
  --color-primary-darker: hsl(var(--color), calc(var(--l) - 5%));
  --color-primary-darkest: hsl(var(--color), calc(var(--l) - 10%));
  --circumference: 250px;
  --scale: 0.095;
  position: relative;
  height: calc(
    var(--circumference) + var(--circumference) * var(--scale) + 100px
  );
  width: calc(
    var(--circumference) + var(--circumference) * var(--scale) + 100px
  );
`;

const OrbGlow = styled.div`
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background: radial-gradient(circle at 0%, var(--color-primary), #fff);
  border: calc(var(--circumference) * var(--scale) / 2) solid
    var(--color-primary-lightest);
  border-radius: 50%;
  height: calc(var(--circumference) + var(--circumference) * var(--scale));
  width: calc(var(--circumference) + var(--circumference) * var(--scale));
  box-shadow: inset 0 0 50px var(--color-primary-lighter),
    0 0 40px var(--color-primary-lightest);

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
    height: calc(var(--circumference) + var(--circumference) * var(--scale));
    width: calc(var(--circumference) + var(--circumference) * var(--scale));
    border-radius: 50%;
    z-index: 40;
    background: radial-gradient(
      circle at 0%,
      rgba(255, 255, 255, 0.23) 0%,
      rgba(255, 255, 255, 0.23) 70%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const OrbCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  width: var(--circumference);
  height: var(--circumference);
  border-radius: 50%;
  background-color: var(--color-primary-lightest);
  box-shadow: inset 0 30px 100px var(--color-primary-lighter),
    0 0 20px var(--color-primary-lighter);

  svg {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const colorValueMapper: {
  [key: string]: string;
} = {
  blue: "220,80%",
  red: "0,80%",
  green: "100,80%",
  orange: "40,80%",
  yellow: "60,80%",
  pink: "330,80%",
  purple: "280,80%",
};

export type OrbProps = {
  color?: "blue" | "red" | "green" | "orange" | "yellow" | "pink" | "purple";
};

export default function Orb({ color = "blue" }: OrbProps): JSX.Element {
  return (
    <OrbContainer color={colorValueMapper[color]}>
      <OrbGlow>
        <OrbCenter></OrbCenter>
      </OrbGlow>
    </OrbContainer>
  );
}
