"use server";

import filtersBaseDate from "@/utils/filters/general/filterDate";
import { filterProductType } from "./type";
import prisma from "@/lib/prisma";

export default async function filterProducts({
  searchParams,
  page,
  take,
  ...options
}: filterProductType) {
  try {
    const filters = {
      ...filtersBaseDate(searchParams),
      deleted: 0,
    };

    const products = await prisma.product.findMany({
      skip: page * take,
      take,
      ...options,
      where: {
        ...filters,
        ...(options.where || {}),
      },
    });

    const countProduct = await prisma.product.count({
      where: {
        ...filters,
        ...(options.where || {}),
      },
    });

    return {
      products,
      countProduct,
    };
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
