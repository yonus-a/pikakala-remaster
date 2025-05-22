import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const iamge = (maxSize: number) =>
  z
    .any()
    .refine(
      (image) => image?.[0]?.size <= maxSize * 1000000,
      `تصویر نمیتواند بیشتر از 5 مگابایت باشد`
    )
    .refine(
      (image) => ACCEPTED_IMAGE_TYPES.includes(image?.[0]?.type),
      "فرمت تصویر اشتباه است"
    );
