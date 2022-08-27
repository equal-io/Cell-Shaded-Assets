import React from "react";

export interface ButtonProps {
  label: string;
  color: "blue" | "green" | "yellow";
}

export default function Button({ label, color }: ButtonProps): JSX.Element {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "#ffffff",
      }}
    >
      {label}
    </button>
  );
}
