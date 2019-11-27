import React, { useState } from "react";

export default function CepInput({ value, onChange, ...rest }) {
  const [input, setInput] = useState(value.toString());

  function maskInput(value) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})(.)/, "$1");
  }

  function cleanMask(value) {
    return value.replace(/\D/g, "");
  }

  function handleChange(e) {
    const result = maskInput(e.target.value);
    const cleanResult = cleanMask(result);
    onChange(cleanResult, result);
    setInput(result);
  }

  return <input value={input} onChange={handleChange} {...rest} />;
}
