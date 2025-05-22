import { SelectProps } from "./type";
import "./styles.scss";

export default function NativeSelect({
  selector = "name",
  ...props
}: SelectProps) {
  const className = props.className || "";

  return (
    <>
      <select
        onChange={props.onChange}
        value={props.defaultValues}
        className={!props.noStyle ? `select ${className}` : className}
        style={props.style}
      >
        {props.placeholder && (
          <option className="placeholder" value="">
            {props.placeholder}
          </option>
        )}
        {props.items?.map((item) => (
          <option key={item.id} value={item.id}>
            {item[selector as never]}
          </option>
        ))}
      </select>
    </>
  );
}
