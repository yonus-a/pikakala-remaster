import { product } from "@prisma/client";

export type ShopClientType = {
  products: Array<product>;
  maxPrice: number;
};
