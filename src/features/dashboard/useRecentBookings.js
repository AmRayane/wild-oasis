import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : parseInt(searchParams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();
  const {
    data: lastBookings,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["last-bookings", `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });
  return { lastBookings, isLoading, error };
}
