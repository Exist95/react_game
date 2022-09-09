import React from "react";
import {
  ResultBox,
  ResultNum,
  ResultPoint,
  ResultMiniBox,
} from "./Result.style";

const Results = ({ hits, point }) => {
  return (
    <ResultBox>
      <ResultNum>
        <ResultMiniBox>{hits} 개</ResultMiniBox>
        <ResultMiniBox> 맞았습니다.</ResultMiniBox>
      </ResultNum>
      <ResultPoint>
        <ResultMiniBox>내 포인트:</ResultMiniBox>
        <ResultMiniBox> {point} 포인트</ResultMiniBox>
      </ResultPoint>
    </ResultBox>
  );
};

export default Results;
