"use client";

import { InputProps } from "./type";
import "./styles.scss";

export default function NativeCheckbox({ ...props }: InputProps) {
  return (
    <label className="labeld-checkbox">
      <input
        className={`custom-checkbox ${props.className || ""}`}
        autoFocus={props.autoFocus}
        type={props.type || "checkbox"}
        value={props.value}
      />
      {props.label && <span>{props.label}</span>}
    </label>
  );
}
