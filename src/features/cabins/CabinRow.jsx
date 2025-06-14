import styled from "styled-components";
import { useDeleteCabin } from "./useDeleteCabin";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { HiDuplicate, HiPencil, HiTrash } from "react-icons/hi";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

export default function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image: imageUrl,
  } = cabin;
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();
  function handleDuplicateCabin() {
    createCabin({
      name: `duplicate of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image: imageUrl,
    });
  }
  return (
    <>
      <TableRow>
        <Img src={imageUrl}></Img>
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{regularPrice}</Price>
        <Discount>{discount === 0 ? "-" : discount}</Discount>

        <div>
          <button disabled={isCreating} onClick={handleDuplicateCabin}>
            <HiDuplicate />
          </button>
          <button onClick={() => setShowForm((showForm) => !showForm)}>
            <HiPencil />
          </button>
          <button disabled={isDeleting} onClick={() => deleteCabin(cabinId)}>
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {showForm && (
        <Modal handleClose={() => setShowForm(false)}>
          <CreateCabinForm
            cabinToEdit={cabin}
            handleClose={() => setShowForm(false)}
          />
        </Modal>
      )}
    </>
  );
}
