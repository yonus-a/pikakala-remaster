"use server";

import filtersBaseDate from "@/utils/filters/general/filterDate";
import { filterUserType } from "./type";
import prisma from "@/lib/prisma";

export default async function filterUsers({
  searchParams,
  page,
  take,
  ...options
}: filterUserType) {
  try {
    const filters = {
      ...filtersBaseDate(searchParams),
      deleted: 0,
    };

    const users = await prisma.user.findMany({
      skip: page * take,
      take,
      ...options,
      where: {
        ...filters,
        ...(options.where || {}),
      },
    });

    const countUsers = await prisma.user.count({
      where: {
        ...filters,
        ...(options.where || {}),
      },
    });

    return {
      users,
      countUsers,
    };
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
