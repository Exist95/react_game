import React, { useState } from "react";
import "./Box.css";

const Box = () => {
  const [value, setValue] = useState("");
  return (
    <div className="box">
      숫자 4개를 맞춰보세요.
      <div>
        <form>
          <input
            className="box_input"
            placeholder="숫자 4개를 입력해주세요"
            value={value}
            type="number"
          />
          <button>입력!</button>
        </form>
      </div>
    </div>
  );
};
console.log(Math.floor(Math.random() * 9999));
export default Box;
