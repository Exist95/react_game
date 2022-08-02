import React, { useRef, useState } from "react";
import { useCallback } from "react";

const Box = () => {
  const [word, setWord] = useState("스터디");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>(
    (e) => {
      e.preventDefault();
      const input = inputEl.current;
      if (word[word.length - 1] === value[0]) {
        setResult("딩동!");
        setWord(value);
        setValue("");
        if (input) {
          input.focus();
        }
      } else {
        setResult("땡");
        setValue("");
        if (input) {
          input.focus();
        }
      }
    },
    [word, value]
  );

  return (
    <div className="box">
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          placeholder="단어를 입력해주세요!"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        ></input>
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default Box;
