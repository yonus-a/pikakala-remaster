"use client";

import toggleScrollbar from "@/utils/general/togggleScrollbar";
import "./styles.scss";

export default function MenuBtn() {
  return (
    <>
      <input
        id="menuBtn"
        type="checkbox"
        className="menu-btn-input"
        onChange={({ target: { checked } }) => toggleScrollbar(checked)}
      />
      <label className="menu-btn" htmlFor="menuBtn">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </>
  );
}
