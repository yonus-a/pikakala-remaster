import ProductsCategorization from "@/components/products/categorization";
import { excludeAllDetails } from "@/utils/server-action/excludeAllDetails";
import getProducts from "@/server-actions/product/getProducts";
import getSlides from "@/server-actions/slides/getSlides";
import ProductSlider from "@/components/products/slider";
import Container from "@/components/general/container";
import ProductGrid from "@/components/products/grid";
import Brands from "@/components/area/brands";
import Hero from "@/components/area/hero";
import Ads from "@/components/area/ads";

export default async function Page() {
  const slides = await getSlides({
    omit: excludeAllDetails,
  });

  const newProducts = await getProducts({
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      price: true,
      image: true,
      name: true,
      id: true,
    },
  });

  return (
    <>
      <Hero slides={slides} />
      <Container>
        <ProductsCategorization />
        <ProductSlider products={newProducts} title="محصولات جدید" />
        <Ads />
        <Brands />
        <ProductGrid products={newProducts} title="کالا های پرفروش" />
      </Container>
    </>
  );
}
