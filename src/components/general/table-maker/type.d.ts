import { merat } from "@prisma/client";
import { ReactNode } from "react";

export type TableMakerType = {
  children?: any;
  extraInfo?: any;
  renderProps?: any;
  options?: any;
  addRowClass?: any;
  data: Array<any> | null | undefined;
  info: Array<{
    component?: boolean;
    header?: boolean;
    Render?: any;
    datetime?: boolean;
    date?: boolean;
    head: string;
    key?: string;
  }>;
};
