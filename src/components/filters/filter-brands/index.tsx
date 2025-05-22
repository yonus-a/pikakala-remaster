import NativeCheckbox from "@/components/general/native-checkbox";

export default function FilterBrands() {
  return (
    <>
      <h2>برند </h2>
      <ul>
        <li>
          <NativeCheckbox name="brand" value="sony" label="Sony" />
        </li>
        <li>
          <NativeCheckbox name="brand" value="huawei" label="Huawei" />
        </li>
        <li>
          <NativeCheckbox name="brand" value="samsung" label="Samsung" />
        </li>
        <li>
          <NativeCheckbox name="brand" value="xiaomi" label="Xiaomi" />
        </li>
        <li>
          <NativeCheckbox name="brand" value="onePlus" label="OnePlus" />
        </li>
      </ul>
    </>
  );
}
