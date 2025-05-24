"use server";

import { ServerActionReturnType } from "@/types/general";
import { user } from "@prisma/client";
import prisma from "@/lib/prisma";

export default async function addUser(
  data: user
): Promise<ServerActionReturnType> {
  try {
    const res = await prisma.user.create({
      data: {
        fullName: data.firstname + " " + data.lastname,
        firstname: data.firstname,
        lastname: data.lastname,
        birthday: data.birthday,
        address: data.address,
        idcard: data.idcard,
        email: data.email,
        id: data.id,
      },
    });

    if (res.id) return { ok: true };
    return { ok: false, error: "کاربری ایجاد نشد" };
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
