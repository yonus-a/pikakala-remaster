"use client";

import { CartProvider } from "react-use-cart";

interface Props {
  children: React.ReactNode;
}

export default function CustomCartProvider({ children }: Readonly<Props>) {
  return <CartProvider>{children}</CartProvider>;
}
