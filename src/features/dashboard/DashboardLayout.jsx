import styled from "styled-components";
import Stat from "./Stat";
import { HiOutlineBanknotes } from "react-icons/hi2";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi";
import { useRecentBookings } from "./useRecentBookings";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
  margin: 0 auto;
`;

export default function DashboardLayout() {
  const { lastBookings } = useRecentBookings();
  const numBookings = lastBookings?.length;
  return (
    <StyledDashboardLayout>
      <Stat
        icon={<HiOutlineBriefcase />}
        value={numBookings}
        title="Bookings"
        color="blue"
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        value={0}
        title="sales"
        color="green"
      />
      <Stat
        icon={<HiOutlineCalendar />}
        value={0}
        title="check ins"
        color="indigo"
      />
      <Stat
        icon={<HiOutlineChartBar />}
        value=""
        title="occupation rate"
        color="yellow"
      />
    </StyledDashboardLayout>
  );
}
