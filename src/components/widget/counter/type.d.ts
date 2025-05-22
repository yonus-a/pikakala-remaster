export type CounterType = {
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete?: () => void;
  showDelete?: boolean;
  count: number;
};
