import Button from "@/components/general/buttons/btn";
import Icon from "@/components/general/icon";
import { CounterType } from "./type";
import "./style.scss";

export default function Counter({
  showDelete = false,
  onDecrement,
  onIncrement,
  onDelete,
  count,
}: CounterType) {
  return (
    <div className="counter">
      <Button type="button" onClick={onIncrement}>
        +
      </Button>
      {count}
      {!showDelete ? (
        <Button type="button" onClick={onDecrement}>
          -
        </Button>
      ) : (
        <Button type="button" className="delete" onClick={onDelete}>
          <Icon name="delete" title="delete item" />
        </Button>
      )}
    </div>
  );
}
