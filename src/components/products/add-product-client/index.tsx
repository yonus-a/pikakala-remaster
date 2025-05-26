"use client";

import useFormServerAction from "@/hooks/useFormServerAction";
import addProduct from "@/server-actions/product/addProduct";
import { AddProductType, ProductSchema } from "./type";
import Container from "@/components/general/container";
import { FormProvider } from "react-hook-form";
import ProductInputs from "../product-inputs";

export default function AddProductClient(props: AddProductType) {
  const { loading, methods, onSubmit } = useFormServerAction({
    successMsg: "محصول با موفقیت ایجاد شد",
    serverAction: addProduct,
    schema: ProductSchema,
  });

  return (
    <section aria-label="add link">
      <Container>
        <h1>اضافه کردن محصول</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <ProductInputs {...props} />
          </form>
        </FormProvider>
      </Container>
    </section>
  );
}
