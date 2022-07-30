import React, { useState, useRef } from "react";
//입력을 안 했을 때는 랜덤 글자가 뜨지만
// 입력이 되었을 때에는 입력 문자가 떠야함

const Box = () => {
  const [word, setWord] = useState("스터디");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      value("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
    console.log(setValue);
  };

  return (
    <div className="box">
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          placeholder="단어를 입력해주세요"
          value={value}
          onChange={onChangeInput}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default Box;
