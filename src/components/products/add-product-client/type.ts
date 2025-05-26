import { optional, str, strNum, strReq } from "@/utils/zod/str";
import { ProductInputsType } from "../product-inputs/type";
import { z } from "zod";

export const ProductSchema = z.object({
  categoryId: strNum("دسته بندی اجباری است"),
  brandId: strNum("برند اجباری است"),
  colorId: strNum("برند اجباری است"),
  description: str().or(optional()),
  name: strReq("نام اجباری است"),
});

export type AddProductInputType = z.infer<typeof ProductSchema>;

export interface AddProductType extends ProductInputsType {}
