import React, { useState } from "react";
import CurrencyInput from "./masks/CurrencyInput";
import PhoneInput from "./masks/PhoneInput";
import CpfInput from "./masks/CpfInput";
import CepInput from "./masks/CepInput";
import CnpjInput from "./masks/CnpjInput";

function App() {
  const [currency, setCurrency] = useState(0);
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [cnpj, setCpnj] = useState("");

  return (
    <div className="App">
      <CurrencyInput
        value={currency}
        onChange={(cleanValue, maskedValue) => setCurrency(cleanValue)}
        placeholder="currency"
      />
      <PhoneInput
        value={phone}
        onChange={(cleanValue, maskedValue) => setPhone(cleanValue)}
        placeholder="Telefone"
      />
      <CpfInput
        value={cpf}
        onChange={(cleanValue, maskedValue) => setCpf(cleanValue)}
        placeholder="CPF"
      />
      <CepInput
        value={cep}
        onChange={(cleanValue, maskedValue) => setCep(cleanValue)}
        placeholder="CEP"
      />
      <CnpjInput
        value={cnpj}
        onChange={(cleanValue, maskedValue) => setCpnj(cleanValue)}
        placeholder="CNPJ"
      />
    </div>
  );
}

export default App;
