import { UseFilterType } from "@/hooks/useFilter";

export interface InputFilterType extends UseFilterType {
  label?: string;
  query?: string;
  cache?: boolean;
}
