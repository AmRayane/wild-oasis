import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useBooking } from "./useBookings";
import Pagination from "../../ui/Pagination";
import { useSearchParams } from "react-router-dom";
function BookingTable() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("pages")) || 1;
  const { bookings, count } = useBooking(page);
  console.log(bookings);
  if (!bookings?.length) return <div>No bookings found</div>;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
      <Table.Footer>
        <Pagination items={count} />
      </Table.Footer>
    </Menus>
  );
}

export default BookingTable;
