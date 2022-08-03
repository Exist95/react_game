import React, { useState, useRef } from "react";

const Box = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (first * second == value) {
      setResult("정답");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="box">
      <div>
        {first}곱하기{second}
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          type="number"
          ref={inputRef}
          placeholder="답을 입력해주세요!"
          value={value}
          onChange={onChangeInput}
        ></input>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default Box;
