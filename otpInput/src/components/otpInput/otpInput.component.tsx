import React from "react";

interface OtpInputComponentPropTypes {
  value: number | "";
  changeHandler: (val: number, index: number) => void;
  index: number;
}

function OtpInputComponent({
  changeHandler,
  index,
  value,
}: OtpInputComponentPropTypes) {
  return (
    <input
      key={index}
      type="number"
      value={value}
      onChange={(e) => changeHandler(Number(e.target.value), index)}
      min={0}
      max={9}
    />
  );
}

export default OtpInputComponent;
