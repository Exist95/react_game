import styled, { keyframes } from "styled-components";

const BallFade = keyframes`
    100% {
    transform: translateY(0);
  }
`;

const BallDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 250%;
  width: 50px;
  height: 50px;
  border: 2px solid rgb(255 255 255);
  margin: auto;
  border-radius: 50%;
  font-size: 30px;
  background-color: rgb(255 255 255);
  color: rgb(48, 48, 48);
  transition: background-color 0.2s;
  transform: translateY(-30vh);
  animation: ${BallFade} 0.6s both;

  > div :nth-of-type(2) {
    animation-delay: 0.5s;
  }
  > div :nth-of-type(3) {
    animation-delay: 0.3s;
  }
  div.ball:nth-of-type(4) {
    animation-delay: 0.4s;
  }
  div.ball:nth-of-type(5) {
    animation-delay: 0.2s;
  }
  div.ball:nth-of-type(6) {
    animation-delay: 0.3s;
  }
`;

export { BallDiv, BallFade };
