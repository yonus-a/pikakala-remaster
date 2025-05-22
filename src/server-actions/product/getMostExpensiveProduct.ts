import prisma from "@/lib/prisma";

export default async function getProducts() {
  try {
    return await prisma.product.findFirst({
      orderBy: {
        price: "desc",
      },
    });
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
