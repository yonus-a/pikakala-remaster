// import ProductsCategorization from "@components/product/products-categorization";
// import { excludeAllDetails } from "@utils/server-action/excludeAllDetails";
// import getProducts from "@server-actions/product/getProducts";
// import NewsArticles from "@components/area/news-articles";
// import getSlides from "@server-actions/slides/getSlides";
// import ProductSlider from "@components/product/slider";
// import Container from "@components/general/container";
import ProductsCategorization from "@/components/products/products-categorization";
import { excludeAllDetails } from "@/utils/server-action/excludeAllDetails";
import getProducts from "@/server-actions/product/getProducts";
import getSlides from "@/server-actions/slides/getSlides";
import ProductSlider from "@/components/products/slider";
import Container from "@/components/general/container";
import Brands from "@/components/area/brands";
import Hero from "@/components/area/hero";
import Ads from "@/components/area/ads";
// import ProductGrid from "@components/product/grid";
// import Hero from "@components/area/hero";
// import Brands from "@components/brands";
// import Ads from "@components/area/ads";

export default async function Page() {
  const slides = await getSlides({
    omit: excludeAllDetails,
  });

  const newProducts = await getProducts({
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main>
      <Hero slides={slides} />
      <Container>
        <ProductsCategorization />
        <ProductSlider
          products={newProducts}
          title="محصولات جدید"
        />
        <Ads />
        <Brands />
        {/* 
        <ProductGrid products={newProducts} title="کالا های پرفروش" />
        <ProductSlider
          style={{ background: "var(--clr-red)" }}
          products={newProducts}
          title="محصولات جدید"
        />
        <NewsArticles /> */}
      </Container>
    </main>
  );
}
