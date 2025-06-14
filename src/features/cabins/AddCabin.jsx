import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
export default function AddCabin() {
  const [showForm, setShowForm] = useState(false);
  function handleClose() {
    setShowForm(false);
  }
  return (
    <div>
      <Button
        variation="primary"
        size="medium"
        onClick={() => setShowForm((showForm) => !showForm)}
      >
        Add new cabin
      </Button>
      {showForm && (
        <Modal handleClose={handleClose}>
          <CreateCabinForm handleClose={handleClose} />
        </Modal>
      )}
    </div>
  );
}
