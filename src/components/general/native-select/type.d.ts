import { CSSProperties } from "react";

export type SelectProps = {
  items: Array<{ name: string; id: string | number }>;
  placeholder?: string;
  style?: CSSProperties;
  defaultValues?: any;
  className?: string;
  noStyle?: boolean;
  selector?: string;
  onChange: any;
};
