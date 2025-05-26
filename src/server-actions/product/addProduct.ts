"use server";

import {
  AddProductInputType,
  ProductSchema,
} from "@/components/products/add-product-client/type";
import { ServerActionReturnType } from "@/types/general";
import safePars from "@/utils/validation/safePars";
import getUserId from "../auth/getUserId";
import prisma from "@/lib/prisma";

export default async function addProduct(
  data: AddProductInputType
): Promise<ServerActionReturnType> {
  try {
    const userId = await getUserId();

    const error = safePars(ProductSchema, data);
    if (error) return { ok: false, error };

    const res = await prisma.product.create({
      data: {
        description: data.description,
        categoryId: +data.categoryId,
        brandId: +data.brandId,
        insertedId: userId,
        name: data.name,
      },
    });

    if (res.id) return { ok: true };
    return { ok: false, error: "لینک ایجاد نشده است !!" };
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
