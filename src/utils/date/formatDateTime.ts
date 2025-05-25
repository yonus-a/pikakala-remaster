import { format } from "date-fns-jalali";

export default function formatDateTime(date: Date) {
  return format(date, "hh:mm yyyy/MM/dd");
}
