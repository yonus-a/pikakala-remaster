"use client";

import SelectFilter from "@/components/filters/select-filter";
import { sortProductsData } from "@/utils/data/sortProduct";
import FilterProducts from "../filter-products";
import ShowProducts from "../show-products";
import { ShopClientType } from "./type";

export default function ShopClient({ products, maxPrice }: ShopClientType) {
  return (
    <div>
      <SelectFilter
        data={sortProductsData}
        placeholder="فیلتر براساس"
        query="sort"
      />
      <ShowProducts products={products} />
    </div>
  );
}
