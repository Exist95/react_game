import { Fieldbox } from "./Field.style";

const Field = ({ number, select }) => {
  return (
    <>
      <Fieldbox onClick={select.bind(this, number)}>{number}</Fieldbox>
    </>
  );
};

export default Field;
