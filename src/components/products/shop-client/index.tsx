"use client";

import SelectFilter from "@/components/filters/select-filter";
import { sortProductsData } from "@/utils/data/sortProduct";
import FilterProducts from "../filter-products";
import Icon from "@/components/general/icon";
import ShowProducts from "../show-products";
import { ShopClientType } from "./type";
import "./styles.scss";

export default function ShopClient({
  totalProducts,
  currentPage,
  totalPages,
  products,
  maxPrice,
}: ShopClientType) {
  return (
    <div className="shop-client">
      <div className="filters">
        <div className="right-col">
          <h2>
            <Icon name="shop" />
            فروشگاه
          </h2>
          <p>
            نمایش {currentPage + 1}&#8209;{totalPages} از {totalProducts} نتیجه
          </p>
        </div>
        <div className="left-col">
          <FilterProducts maxPrice={maxPrice} />
          <SelectFilter
            data={sortProductsData}
            placeholder="فیلتر براساس"
            query="sort"
          />
        </div>
      </div>
      <ShowProducts products={products} />
    </div>
  );
}
