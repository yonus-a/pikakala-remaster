import { useRouter, useSearchParams } from "next/navigation";

export default function useParmas() {
  let params = new URLSearchParams([...(useSearchParams() || [])]);
  const router = useRouter();

  const push = () => {
    params.delete("page");

    [...params.entries()].map(([key, val]) => {
      if (!val) params.delete(key);
    });

    router.push("?" + params.toString());
  };

  return {
    params,
    push,
  };
}
