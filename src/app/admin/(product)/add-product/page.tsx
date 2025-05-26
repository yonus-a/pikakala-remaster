import AddProductClient from "@/components/products/add-product-client";
import getCategories from "@/server-actions/category/getCategories";
import getBrands from "@/server-actions/brand/getBrands";
import getColors from "@/server-actions/color/getColors";
import Container from "@/components/general/container";

export default async function AddProduct() {
  const categories = await getCategories();
  const brands = await getBrands();
  const colors = await getColors();

  return (
    <section aria-label="add Product">
      <Container>
        <AddProductClient
          categories={categories}
          brands={brands}
          colors={colors}
        />
      </Container>
    </section>
  );
}
