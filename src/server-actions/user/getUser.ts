"use server";

import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export default async function getUser(
  userId: string,
  options: Prisma.userFindManyArgs = {}
) {
  try {
    const users = await prisma.user.findMany({
      where: {
        id: userId,
      },
      ...options,
    });

    return users[0];
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
