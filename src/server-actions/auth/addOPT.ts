"use server";

import { ServerActionReturnType } from "@/types/general";
import deleteAllOTPs from "./deleteAllOTPs";
import { addMinutes } from "date-fns";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export default async function addOTP(
  phone: string,
  otp: string
): Promise<ServerActionReturnType> {
  try {
    await deleteAllOTPs(phone);

    const hashedOtp = await bcrypt.hash(otp, 10);

    const res = await prisma.otp.create({
      data: {
        expiry: +addMinutes(new Date(), 2),
        otp: hashedOtp,
        id: phone,
      },
    });

    if (res.id) return { ok: true };
    return { ok: false };
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
