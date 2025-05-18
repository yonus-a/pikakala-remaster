import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export default async function getProducts(
  options: Prisma.productFindManyArgs = {}
) {
  try {
    return await prisma.product.findMany({
      ...options,
      where: {
        deleted: 0,
        ...(options.where || {}),
      },
    });
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
