"use server";

import { ServerActionReturnType } from "@/types/general";
import sendOTPSMS from "@/utils/auth/sendOTPSMS";
import upsertUser from "../user/upsertUser";
import addOTP from "./addOPT";
import crypto from "crypto";

export default async function sendOTP(
  phone: string
): Promise<ServerActionReturnType> {
  try {
    if (!phone) return { ok: false, error: "شماره تماس را وارد کنید" };

    const res = await upsertUser(phone);

    if (res.ok) {
      const otp = crypto.randomInt(1111, 9999).toString();

      await sendOTPSMS({
        receptor: phone,
        token: otp,
      });

      return await addOTP(phone, otp);
    } else {
      return { ok: false, error: "کاربری ایجاد نشد !!" };
    }
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
