import React from "react";
import { StartButtonOff, StartButtonOn } from "./ButtonStart.style";

const ButtonStart = ({ start, playerNumbers }) =>
  playerNumbers.length === 6 ? (
    <StartButtonOn onClick={start}>start</StartButtonOn>
  ) : (
    <StartButtonOff disabled>Start</StartButtonOff>
  );

export default ButtonStart;
