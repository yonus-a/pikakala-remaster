import { filterType } from "@/types/general";
import { Prisma } from "@prisma/client";

export interface filterUserType extends filterType, Prisma.userFindManyArgs {}
