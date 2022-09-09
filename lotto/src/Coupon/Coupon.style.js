import styled from "styled-components";

const CouponBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-around;
  margin: 20px auto;
  width: 200px;
  max-width: 500px;
  height: 300px;
  padding: 15px;
  background-color: rgb(255 214 132);
  border: 2px solid rgb(239 114 135);
  border-radius: 10px;
  box-shadow: 0 0 0 8px white, 0 0 0px 10px rgb(0, 0, 0);

  > .selected {
    background-color: black;
    color: gray;
  }
`;

export { CouponBox };
