import { startOfDay, endOfDay } from "date-fns";
import fixTime from "@/utils/date/fixTime";

export default function filtersBaseDate(searchParams: any) {
  const { date1, date2 } = searchParams;
  if (!date1) return {};
  let endDay;

  const nextDate1 = fixTime(date1);
  const startDay = startOfDay(nextDate1);

  if (date2) {
    const nextDate2 = fixTime(date2);
    endDay = endOfDay(nextDate2);
  } else {
    endDay = endOfDay(nextDate1);
  }

  return {
    createdAt: {
      gt: startDay,
      lt: endDay,
    },
  };
}
