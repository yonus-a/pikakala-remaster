import InputFilter from "@/components/filters/input-filter";
import TableMaker from "@/components/general/table-maker";
import { userTableInfo } from "@/utils/table-info/user";
import { product } from "@prisma/client";

interface Props {
  products: Array<product>;
}

export default function ProductManagmentClient({ products }: Props) {
  return (
    <div className="product-managment-client">
      <h1>مدیریت محصولات</h1>
      <div className="filters">
        <InputFilter />
      </div>
      <TableMaker data={products} info={userTableInfo} />
    </div>
  );
}
