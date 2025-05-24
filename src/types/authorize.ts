import { strNum } from "@/utils/zod/str";
import { z } from "zod";

export const AuthorizeSchema = z.object({
  phone: strNum("شماره تماس اجباری است"),
  otp: strNum("کد تایید اجباری است"),
});

export type AuthorizeType = z.infer<typeof AuthorizeSchema>;
