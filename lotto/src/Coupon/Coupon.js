import React from "react";
import Field from "./Field";
import { CouponBox } from "./Coupon.style";

const Coupon = ({ numbers, select, ok }) => {
  const fields = numbers.map((number) => (
    <Field ok={ok} key={number} number={number} select={select} />
  ));

  return <CouponBox>{fields}</CouponBox>;
};

export default Coupon;
