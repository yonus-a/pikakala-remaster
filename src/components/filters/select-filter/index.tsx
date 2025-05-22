import NativeSelect from "@/components/general/native-select";
import useParmas from "@/hooks/useParmas";
import { SelectFilterType } from "./type";

export default function SelectFilter({
  placeholder,
  selector,
  query,
  data,
}: SelectFilterType) {
  const { push, params } = useParmas();

  const hanldeChange = ({ target }: any) => {
    const value = target.value;
    params.set(query, value);
    push();
  };

  return (
    <NativeSelect
      placeholder={placeholder}
      onChange={hanldeChange}
      selector={selector}
      items={data}
    />
  );
}
