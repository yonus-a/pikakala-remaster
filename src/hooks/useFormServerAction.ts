import { UseFormServerActionType } from "@/types/useFormServerActionType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";

export default function useFormServerAction({
  defaultValues = {},
  dataToServer = {},
  serverAction,
  successMsg,
  schema,
}: UseFormServerActionType) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      const res = await serverAction({
        ...data,
        ...dataToServer,
      });

      if (res.ok) {
        toast.success(successMsg);
        router.refresh();
      } else {
        throw new Error(res.error);
      }
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    onSubmit,
    loading,
    methods,
  };
}
