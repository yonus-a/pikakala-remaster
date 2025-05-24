"use client";

import { AuthorizeSchema, AuthorizeType } from "@/types/authorize";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/general/buttons/btn";
import SendOtpButton from "../send-otp-btn";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Input from "../../general/input";
import toast from "react-hot-toast";
import "./style.scss";

export default function Login() {
  const router = useRouter();
  const methods = useForm<AuthorizeType>({
    resolver: zodResolver(AuthorizeSchema),
  });

  const onSubmit = async (data: AuthorizeType) => {
    const result = await signIn("credentials", {
      redirect: false,
      ...data,
    });

    if (result?.ok) {
      router.push("/");
    } else {
      toast.error(result?.error || "");
    }
  };

  return (
    <div className="login">
      <FormProvider {...methods}>
        <form className="login" onSubmit={methods.handleSubmit(onSubmit)}>
          <Input placeholder="شماره تماس" name="phone" type="text" />
          <div className="input-group">
            <Input name="otp" placeholder="رمز ارسالی" />
            <SendOtpButton />
          </div>
          <Button className="primary-btn" type="submit">
            ورود
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
