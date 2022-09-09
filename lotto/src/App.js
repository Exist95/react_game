import { useState } from "react";
import { TotalPoint, LottoMainBox, ResetBox, BixContainer } from "./App.style";
import Coupon from "./Coupon/Coupon";
import LottoHeader from "./LottoHeader/LottoHeader";
import Result from "./Result/Result";
import ButtonReset from "./Button/ButtonReset";
import ButtonStart from "./Button/ButtonStart";
import Display from "./Display/Display";

const Lotto = () => {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45,
  ];

  const [playerNum, setPlayerNum] = useState([]);
  const [drawedNumbers, setDrawedNumbers] = useState([]);
  const [hits, setHits] = useState(0);
  const [point, setPoint] = useState(5000);

  const selectedNumbers = (number, event) => {
    if (playerNum.length < 6 && !playerNum.includes(number)) {
      const numbers = [...playerNum];
      numbers.push(number);
      setPlayerNum(numbers);
      event.target.classList.toggle("selected");
    }
    if (playerNum.includes(number)) {
      let numbers = [...playerNum];
      numbers = numbers.filter((num) => num !== number);
      setPlayerNum(numbers);
      event.target.classList.toggle("selected");
    }
  };

  const checkWin = (playerNumbers, drawedNumbers) => {
    const winNumbers = [];

    playerNumbers.forEach(function (number) {
      for (let i = 0; i < 6; i++) {
        if (number === drawedNumbers[i]) {
          winNumbers.push(number);
        }
      }
    });

    const hits = winNumbers.length;
    setHits(hits);

    if (hits === 3) {
      setPoint((prev) => prev + 10000);
    } else if (hits === 4) {
      setPoint((prev) => prev + 307000);
    } else if (hits === 5) {
      setPoint((prev) => prev + 13391000);
    } else if (hits === 6) {
      setPoint((prev) => prev + 3213957000);
    }
  };

  const startDraw = () => {
    if (playerNum.length === 6 && point >= 1000) {
      const optionNumbers = [...numbers];
      const drawedNumbers = [];
      setPoint((prev) => prev - 1000);

      for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * optionNumbers.length);
        drawedNumbers.push(optionNumbers[index]);
        optionNumbers.splice(index, 1);
      }
      setDrawedNumbers(drawedNumbers);
      checkWin(playerNum, drawedNumbers);
    }
  };

  const resetGame = () => {
    const selectedNumbers = [...document.querySelectorAll(".selected")];
    selectedNumbers.forEach((num) => num.classList.remove("selected"));
    setPlayerNum([]);
    setDrawedNumbers([]);
    setHits(0);
    setPoint(point);
  };

  return (
    <BixContainer>
      <LottoHeader />
      <LottoMainBox>
        <Display drawedNumbers={drawedNumbers} />
        {/* 나중에 TotalPoint에 포인트 연동시켜야 합니다 */}
        {/* <TotalPoint>{`당신의 포인트는 ${point} 입니다.`}</TotalPoint> */}
        <Coupon numbers={numbers} select={selectedNumbers}></Coupon>
        <Result hits={hits} point={point} />
      </LottoMainBox>
      <ResetBox>
        <ButtonReset reset={resetGame} />
        <ButtonStart playerNumbers={playerNum} start={startDraw} />
      </ResetBox>
    </BixContainer>
  );
};

export default Lotto;
