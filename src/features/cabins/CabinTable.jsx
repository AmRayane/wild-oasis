import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Row from "../../ui/Row";
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";
const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

export default function CabinTable() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("discount") || "all-cabins";

  const {
    data: cabins,
    isPending,
    error,
  } = useQuery({
    queryKey: ["cabins", filterValue],
    queryFn: () => getCabins(filterValue),
  });
  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabins</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      <Row type="vertical">
        {cabins?.map((cabin) => (
          <CabinRow key={cabin.id} cabin={cabin} />
        ))}
      </Row>
    </Table>
  );
}
