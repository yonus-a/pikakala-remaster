import getMostExpensiveProduct from "@/server-actions/product/getMostExpensiveProduct";
import filterProducts from "@/server-actions/product/filterProducts";
import getFilterData from "@/utils/server-action/getFilterData";
import NextPagination from "@/components/widget/pagination";
import ShopClient from "@/components/products/shop-client";
import Container from "@/components/general/container";
import { PageType } from "@/types/pageType";

export default async function Shop({ searchParams }: PageType) {
  const filterData = getFilterData(20, await searchParams);
  const product = await getMostExpensiveProduct();
  const { products, totalProduct } = await filterProducts({
    ...filterData,
    select: {
      image: true,
      name: true,
      id: true,
    },
  });

  return (
    <section aria-label="shop">
      <Container>
        <ShopClient products={products} maxPrice={product?.price} />
        <NextPagination total={totalProduct} page={filterData.page} />
      </Container>
    </section>
  );
}
