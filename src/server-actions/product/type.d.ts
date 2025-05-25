import { filterType } from "@/types/general";
import { Prisma } from "@prisma/client";

export interface filterProductType
  extends filterType,
    Prisma.productFindManyArgs {}
