import { selectDataType } from "@/types/general";

export type ProductInputsType = {
  categories: Array<selectDataType>;
  brands: Array<selectDataType>;
  colors: Array<selectDataType>;
};
