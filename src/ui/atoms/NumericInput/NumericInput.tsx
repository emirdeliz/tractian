import React, { useState } from "react";
import { Input, Tooltip } from "antd";

interface NumericInputProps {
  value: number | undefined;
  placeholder?: string;
  onChange: (value: number | undefined) => void;
}

const formatNumber = (value: number) => new Intl.NumberFormat().format(value);

export const NumericInput = (props: NumericInputProps) => {
  const { value, placeholder, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      onChange(undefined);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = String(value);
    if (valueTemp.charAt(valueTemp.length - 1) === "." || valueTemp === "-") {
      valueTemp = valueTemp.slice(0, -1);
    }
    onChange(Number(valueTemp.replace(/0*(\d+)/, "$1")));
  };

  const title = value ? (
    <span className="numeric-input-title">
      {String(value) !== "-" ? formatNumber(Number(value)) : "-"}
    </span>
  ) : (
    placeholder || "Entre com um número"
  );

  return (
    <Tooltip
      trigger={["focus"]}
      title={title}
      placement="topLeft"
      overlayClassName="numeric-input"
    >
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        maxLength={16}
      />
    </Tooltip>
  );
};
