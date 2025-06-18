import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

const max_items = 5;
export default function Pagination({ items }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("pages")
    ? 1
    : Number(searchParams.get("pages"));
  const max_pages = Math.ceil(items / max_items);
  function nextPage() {
    const next = currentPage === max_pages ? max_pages : currentPage + 1;
    searchParams.set("pages", next);
    setSearchParams(searchParams);
  }

  function previousPage() {
    const prev = currentPage === 1 ? 1 : currentPage - 1;
    searchParams.set("pages", prev);
    setSearchParams(searchParams);
  }
  return (
    <StyledPagination>
      <P>
        from {(currentPage - 1) * max_items} to{" "}
        {currentPage === max_pages
          ? items
          : max_items * (currentPage - 1) + max_items}{" "}
        of {items}
      </P>
      <Buttons>
        <PaginationButton disabled={currentPage === 1} onClick={previousPage}>
          <HiArrowLeft />
          <P>Prev</P>
        </PaginationButton>
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === max_pages}
        >
          <P>Next</P>
          <HiArrowRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}
