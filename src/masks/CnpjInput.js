import React, { useState } from "react";

export default function CnpjInput({ value, onChange, ...rest }) {
  const [input, setInput] = useState(value.toString());

  function maskInput(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(.\d{3})(\d)/, "$1.$2")
      .replace(/(.\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/([-]\d{2})(\d)/, "$1");
  }

  function cleanMask(value) {
    return value.replace(/\D/g, "");
  }

  function handleChange(e) {
    const result = maskInput(e.target.value);
    const cleanResult = cleanMask(result);
    setInput(result);
    onChange(cleanResult, result);
  }

  return <input value={input} onChange={handleChange} {...rest} />;
}
