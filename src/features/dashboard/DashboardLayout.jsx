import styled from "styled-components";
import Stat from "./Stat";
import { HiOutlineBanknotes } from "react-icons/hi2";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import { formatCurrency } from "../../utils/helpers";
import TodayActivity from "../check-in-out/TodayActivity";
import DurationChart from "./DurationChart";
import SalesChart from "./SalesChart";
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
  margin: 0 auto;
`;

export default function DashboardLayout() {
  const { lastBookings } = useRecentBookings();
  const { confirmedStays, numDays } = useRecentStays();
  const numBookings = lastBookings?.length;
  const checkins = confirmedStays?.length;
  const sales = lastBookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const occupation =
    confirmedStays?.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * lastBookings?.length);
  return (
    <StyledDashboardLayout>
      <>
        <Stat
          icon={<HiOutlineBriefcase />}
          value={numBookings}
          title="Bookings"
          color="blue"
        />
        <Stat
          icon={<HiOutlineBanknotes />}
          value={formatCurrency(sales)}
          title="sales"
          color="green"
        />
        <Stat
          icon={<HiOutlineCalendar />}
          value={checkins}
          title="check ins"
          color="indigo"
        />
        <Stat
          icon={<HiOutlineChartBar />}
          value={`${Math.round(occupation * 100)}%`}
          title="occupation rate"
          color="yellow"
        />
      </>
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={lastBookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}
