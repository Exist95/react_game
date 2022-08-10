import React from "react";

const Try = ({ tryInfo }) => {
  return (
    <div>
      <div>Value: {tryInfo.try}</div>
      <div>Result: {tryInfo.result}</div>
    </div>
  );
};

export default Try;
