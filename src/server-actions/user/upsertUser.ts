"use server";

import { ServerActionReturnType } from "@/types/general";
import prisma from "@/lib/prisma";

export default async function upsertUser(
  userId: string
): Promise<ServerActionReturnType> {
  try {
    const res = await prisma.user.upsert({
      where: {
        id: userId,
      },
      create: {
        id: userId,
      },
      update: {},
    });

    if (res.id) return { ok: true };
    return { ok: false, error: "کاربری ایجاد نشد" };
  } catch (e) {
    console.log(e);
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
