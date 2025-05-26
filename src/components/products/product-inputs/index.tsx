import Textarea from "@/components/general/textarea";
import Select from "@/components/general/select";
import Input from "@/components/general/input";
import { ProductInputsType } from "./type";

export default function ProductInputs({
  categories,
  brands,
  colors,
}: ProductInputsType) {
  return (
    <div className="aria-label">
      <Input name="name" placeholder="نام محصول" />
      <Select name="categoryId" items={categories} placeholder="دسته بندی" />
      <Input name="image" type="file" multiple />
      <Select name="brandId" items={brands} placeholder="برند" />
      <Select name="colorId" items={colors} placeholder="رنگ" />
      <Textarea name="description" />
    </div>
  );
}
