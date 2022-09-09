import React from "react";
import { ResetButton } from "./ButtonReset.style";

const ButtonReset = ({ reset }) => {
  return <ResetButton onClick={reset}>Reset</ResetButton>;
};

export default ButtonReset;
