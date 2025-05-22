"use client";

import Button from "@/components/general/buttons/btn";
import Logo from "@/components/general/logo";
import { signOut } from "next-auth/react";
import "./style.scss";

export default function SignOut() {
  const handleClick = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="signOut">
      <Logo />
      <h1>خروج از حساب کاربری</h1>
      <p>آیا از خروج خود مطمئن هستید ؟</p>
      <Button onClick={handleClick}>خروج از حساب</Button>
    </div>
  );
}
