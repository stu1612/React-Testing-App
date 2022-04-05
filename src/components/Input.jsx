// npm
import { useState } from "react";
// utils
import onValidate from "../utils/onValidate";

export default function Input({ settings, state, validation }) {
  const { label, placeholder, required, type, autofocus, max, min } = settings;
  const [getter, setter] = state;

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <label>
      {label}
      <input
        type={type}
        value={getter}
        onChange={(event) => setter(event.target.value)}
        onBlur={() => onValidate(validation, getter, setter, setErrorMessage)}
        placeholder={placeholder}
        autoFocus={autofocus}
        required={required}
        max={max}
        min={min}
      />
      <small>{errorMessage}</small>
    </label>
  );
}
