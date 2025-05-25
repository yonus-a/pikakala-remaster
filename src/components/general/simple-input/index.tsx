"use client";

import { InputProps } from "./type";
import "./styles.scss";

export default function SimpleInput({ ...props }: InputProps) {
  return (
    <label className="labeld-input">
      {props.label && <span>{props.label}</span>}
      <input
        className={`custom-input ${props.className || ""}`}
        placeholder={props.placeholder || ""}
        defaultValue={props.defaultValue}
        autoFocus={props.autoFocus}
        type={props.type || "text"}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      />
    </label>
  );
}
