import NativeCheckbox from "@/components/general/native-checkbox";

export default function FilterCategories() {
  return (
    <>
      <h2>دسته بندی </h2>
      <ul>
        <li>
          <NativeCheckbox name="category" value="mobile" label="گوشی" />
        </li>
        <li>
          <NativeCheckbox name="category" value="tablet" label="تبلت" />
        </li>
        <li>
          <NativeCheckbox
            name="category"
            value="accessories"
            label="لوازم جانبی"
          />
        </li>
        <li>
          <NativeCheckbox name="category" value="watch" label="ساعت" />
        </li>
        <li>
          <NativeCheckbox name="category" value="laptop" label="لپتاپ" />
        </li>
      </ul>
    </>
  );
}
