import { CSSProperties } from "react";
import { boolean } from "zod";

export interface InputProps {
  style?: CSSProperties;
  placeholder?: string;
  autoFocus?: boolean;
  defaultValues?: any;
  defaultchcked?: any;
  errorMsg?: boolean;
  className?: string;
  multiple?: boolean;
  noStyle?: boolean;
  label?: string;
  list?: string;
  type?: string;
  name: string;
}
