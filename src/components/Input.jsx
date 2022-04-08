// npm
import { useState } from "react";
// utils
import onValidate from "../utils/onValidate";

export default function Input({ settings, state, validation }) {
  const { label, placeholder, required, type, autoFocus, max, min } = settings;
  const [getter, setter] = state;
  const [errorMessage, setErrorMessage] = useState("");

  // Safeguard
  if (settings === undefined)
    throw new Error("Error - settings props missing ");
  if (state === undefined) throw new Error("Error - settings props missing ");

  return (
    <label>
      {label}
      <input
        type={type}
        value={getter}
        onChange={(event) => setter(event.target.value)}
        onBlur={() => onValidate(validation, getter, setter, setErrorMessage)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        required={required}
        max={max}
        min={min}
      />
      <small>{errorMessage}</small>
    </label>
  );
}
