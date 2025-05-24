"use server";

import prisma from "@/lib/prisma";

export default async function deleteAllOTPs(idcard: string) {
  try {
    return await prisma.otp.deleteMany({
      where: {
        id: idcard,
      },
    });
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
