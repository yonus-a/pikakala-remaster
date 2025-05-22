import { product } from "@prisma/client";

export type ShopClientType = {
  products: Array<product>;
  totalProducts: number;
  currentPage: number;
  totalPages: number;
  maxPrice: number;
};
