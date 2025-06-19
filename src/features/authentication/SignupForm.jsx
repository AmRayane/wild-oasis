import { useForm, useFormState } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSingup } from "./useSingup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, getValues, handleSubmit, formState, reset } = useForm();
  const { singUp, inRegistration } = useSingup();
  const { errors } = formState;
  function onSubmit({ fullName, email, password }) {
    singUp(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input type="text" id="fullName" {...register("fullName")} />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input type="email" id="email" {...register("email")} />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 8,
              message: "minimum 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "this field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          disabled={inRegistration}
          variation="secondary"
          size="medium"
          type="reset"
        >
          Cancel
        </Button>
        <Button disabled={inRegistration} variation="primary" size="medium">
          Create new user
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
