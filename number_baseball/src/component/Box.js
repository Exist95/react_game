import React, { useState } from "react";
import "./Box.css";
import Try from "./Try";

//전부 화살표 함수 사용

const getNumber = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr = [];
  for (let i = 0; i < 4; i++) {
    const getNum = num.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    //잘라내서 없애는 거니까, 한번 정해진 숫자는 사라짐
    //9, 8, 7, 6
    arr.push(getNum);
    //그대로 arr에 push
  }
  return arr;
};

const Box = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [hideValue, setHideValue] = useState(getNumber());
  const [history, setHistory] = useState([]);

  //form 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === hideValue.join("")) {
      setHistory((el) => {
        return [{ try: value, result: "💜" }, ...el];
      });
      setResult("💜Good!");
      setValue("");
      setHideValue(getNumber());
      setHistory([]);
    } else {
      const resultArr = value.split("").map((el) => parseInt(el));

      // console.log(resultArr);
      let strike = 0;
      for (let i = 0; i < 4; i++) {
        if (resultArr[i] === hideValue[i]) {
          strike += 1;
        }
        //else if 가 필요없지 않을까?
      }
      setResult(`${strike}⭕ ${4 - strike}❌`);
      setHistory((el) => [
        { try: value, result: `${strike}⭕ ${4 - strike}❌` },
        ...el,
      ]);
      setValue("");
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="box">
      <div className="subtitle">Please enter 4 numbers</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="box_input"
            placeholder="입력란"
            value={value}
            maxLength={4}
            onChange={onChangeInput}
          />
          <button>enter!</button>
        </form>
        <div className="result">{result}</div>
        <div className="hideNum">{hideValue}</div>
      </div>
      <div>
        <div className="history">history</div>
        <div className="history_box">
          {history.map((v) => {
            return <Try tryInfo={v} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Box;
