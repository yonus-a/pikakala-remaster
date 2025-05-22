"use client";

import SimpleInput from "@/components/general/simple-input";
import useFilter from "@/hooks/useFilter";
import { InputFilterType } from "./type";
import "./styles.scss";

export default function InputFilter({
  label = "جستجو",
  query = "search",
  cache,
}: InputFilterType) {
  const { handleChange, params } = useFilter({
    query,
    cache,
  });

  return (
    <SimpleInput
      defaultValue={params.get(query)}
      className="search-input"
      onChange={handleChange}
      placeholder={label}
    />
  );
}
