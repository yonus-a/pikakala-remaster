"use server";

import { excludeAllDetails } from "@/utils/server-action/excludeAllDetails";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export default async function getColors(
  options: Prisma.colorFindManyArgs = {}
) {
  try {
    return await prisma.color.findMany({
      ...options,
      omit: excludeAllDetails,
      where: {
        deleted: 0,
        ...(options.where || {}),
      },
    });
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
