import styled from "styled-components";

const StartButtonOn = styled.button`
  background-color: rgb(255 200 200);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StartButtonOff = styled.button`
  background-color: rgb(10 10 10);
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StartButtonOff, StartButtonOn };
