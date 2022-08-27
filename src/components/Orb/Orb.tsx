import React from "react";
import "./Orb.scss";

export type OrbProps = {};

export default function Orb({}: OrbProps): JSX.Element {
  return (
    <div className="orb-container">
      <div className="orb-glow blue">
        <div className="orb-center"></div>
      </div>
    </div>
  );
}
