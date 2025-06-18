import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBooking(page) {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const {
    data: { data: bookings, count } = {},
    error,
    isPending,
  } = useQuery({
    queryKey: ["bookings", status, page],
    queryFn: () => getBookings(status, page),
  });
  return { bookings, error, isPending, count };
}
