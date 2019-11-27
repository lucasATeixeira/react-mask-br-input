import React, { useState } from "react";

export default function CurrencyInput({ value, onChange, ...rest }) {
  const [input, setInput] = useState(() => {
    const number = Number(value) / 100;
    return number.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });
  }); // TRANSFORM THE RECEIVED VALUE, STRING OR NUMBER, TO CURRENCY

  function maskInput(value) {
    const number = Number(value.replace(/\D/g, "")) / 100;
    return number.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    });
  }

  function cleanMask(value) {
    return Number(value.replace(/\D/g, "")) / 100;
  }

  function handleChange(e) {
    const result = maskInput(e.target.value);
    const cleanResult = cleanMask(result);
    setInput(result);
    onChange(cleanResult, result);
  }

  return <input type="text" value={input} onChange={handleChange} {...rest} />;
}
