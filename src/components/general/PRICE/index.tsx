"use client";

import { useEffect } from "react";

export default function PRICE() {
  useEffect(() => {
    document.querySelectorAll(".price").forEach((el) => {
      const formatted = Number(el.textContent).toLocaleString("fa-IR");
      el.textContent = formatted;
    });
  }, []);

  return <></>;
}
