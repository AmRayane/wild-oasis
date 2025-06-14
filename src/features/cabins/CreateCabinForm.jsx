import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useEditCabin } from "./useEditCabin";
import { useCreateCabin } from "./useCreateCabin";
const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm({ cabinToEdit = {}, handleClose }) {
  const { isEditing, editCabin } = useEditCabin();
  const { isCreating, createCabin } = useCreateCabin();
  const isWorking = isEditing || isCreating;
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: isEditSession ? editValues : {} });

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            handleClose();
          },
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            handleClose();
          },
        }
      );
  }
  function onError(errors) {}
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={handleClose ? "modal" : "regular"}
    >
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "name is required ",
          })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "maximum capacity is required ",
            min: {
              value: 1,
              message: "min capacity is 1",
            },
          })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "price is required",
            min: {
              value: 1,
              message: "price can't be null or negative",
            },
          })}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          min="0"
          defaultValue={0}
          {...register("discount")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image" {...register("image")}>
          Cabin photo
        </Label>
        <FileInput
          id="image"
          type="file"
          accept="image/*"
          {...register("image")}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          size="small"
          type="reset"
          onClick={() => handleClose?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking} variation="primary" size="small">
          Add cabin
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
