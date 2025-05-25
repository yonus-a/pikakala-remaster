import { format } from "date-fns-jalali";

export default function formatDate(date: Date) {
  return format(date, "yyyy/MM/dd");
}
