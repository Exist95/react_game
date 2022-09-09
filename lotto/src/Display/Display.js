import React from "react";
import Ball from "./Ball";
import { DisplayDiv } from "./Display.style";

const Display = ({ drawedNumbers }) => {
  const balls = drawedNumbers.map((number) => (
    <Ball key={number} number={number} />
  ));
  const displayInfo = drawedNumbers.length ? balls : "숫자 6개를 골라주세요!";
  return <DisplayDiv className="display">{displayInfo}</DisplayDiv>;
};

export default Display;
