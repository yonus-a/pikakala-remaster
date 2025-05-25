import { useEffect } from "react";
import useParmas from "./useParmas";

export interface UseFilterType {
  cache?: boolean | undefined;
  query: string;
}

export default function useFilter({ query, cache }: UseFilterType) {
  const { params, push } = useParmas();

  useEffect(() => {
    if (cache) {
      const cached = localStorage.getItem(query);

      if (cached) {
        params.set(query, cached);
        push();
      }
    }
  }, []);

  const handleChange = ({ target }: any) => {
    if (cache) localStorage.setItem(query, target.value);
    params.set(query, target.value);
    push();
  };

  return {
    handleChange,
    params,
  };
}
