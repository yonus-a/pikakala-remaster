"use client";

import { useEffect } from "react";

export default function WOWINIT() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      /* eslint-disable @typescript-eslint/no-require-imports */
      const Wow = require("wowjs");
      new Wow.WOW().init();
    }
  }, []);

  return <></>;
}
