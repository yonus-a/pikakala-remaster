import ProductManagmentClient from "@/components/products/product-managment-client";
import { selectDataForShow } from "@/utils/general/selectDataForShow";
import filterProducts from "@/server-actions/product/filterProducts";
import getFilterData from "@/utils/server-action/getFilterData";
import NextPagination from "@/components/widget/pagination";
import Container from "@/components/general/container";
import { PageType } from "@/types/general";

export default async function Products({ searchParams }: PageType) {
  const filterData = await getFilterData(20, await searchParams);
  const { countProduct, products } = await filterProducts({
    ...filterData,
    select: {
      category: selectDataForShow,
      brand: selectDataForShow,
      createdAt: true,
      name: true,
      id: true,
    },
  });

  return (
    <section className="admin-products" aria-label="product-managment">
      <Container>
        <ProductManagmentClient products={products} />
        <NextPagination
          page={filterData.page}
          take={filterData.take}
          total={countProduct}
        />
      </Container>
    </section>
  );
}
