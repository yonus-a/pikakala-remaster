"use server";

import { AuthorizeType } from "@/types/authorize";
import getUser from "../user/getUser";
import bcryptjs from "bcryptjs";

export default async function authorizeUser(data: AuthorizeType) {
  const { otp, phone } = data;

  const user: any = await getUser(phone, {
    select: { id: true, otp: { select: { otp: true } } },
  });

  const matchPass = await bcryptjs.compare(otp, user.otp.otp);

  if (!matchPass) throw new Error("رمز کاربری شما اشتباه است");

  return user;
}
