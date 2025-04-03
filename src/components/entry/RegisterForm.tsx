import { addToast, Form, Input } from "@heroui/react";
import React, { useActionState } from "react";
import * as actions from "@/actions";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
// Define a type for the action state
interface ActionState {
  success?: boolean;
  errors?: {
    _form?: string[];
  };
}

// Ensure T extends ActionState so it has success & errors
function withToasts<T extends ActionState>(
  action: (prevState: T, formData: FormData) => Promise<T>
) {
  return async (prevState: T, formData: FormData): Promise<T> => {
    const result = await action(prevState, formData);

    if (result.success) {
      addToast({ color: "success", title: "Signup successful!" });
    } else if (result.errors?._form?.length) {
      addToast({ color: "danger", title: result.errors._form[0] });
    }

    return result;
  };
}

export default function RegisterForm() {
  const [signupState, signupAction, isPending] = useActionState(
    withToasts(actions.registerUser),
    {
      errors: {},
      inputs: {},
    }
  );

  const firstErrors = Object.fromEntries(
    Object.entries(signupState.errors || {}).map(([key, value]) => [
      key,
      Array.isArray(value) ? value[0] : value,
    ])
  );

  return (
    <Form
      key={JSON.stringify(signupState.inputs)} // Ensure form resets
      action={signupAction}
      validationErrors={firstErrors}
      validationBehavior="aria"
    >
      <div className="flex-col space-y-5 justify-center">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            isClearable
            name="firstName"
            type="text"
            label="First Name"
            defaultValue={signupState.inputs?.firstName || ""}
          />
          <Input
            isClearable
            name="lastName"
            type="text"
            label="Last Name"
            defaultValue={signupState.inputs?.lastName || ""}
          />
        </div>
        <Input
          isClearable
          name="email"
          type="email"
          label="Email"
          defaultValue={signupState.inputs?.email || ""}
        />
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <PasswordInput
            name="p1"
            label="Password"
            defaultValue={signupState.inputs?.p1 || ""}
          />

          <PasswordInput
            name="p2"
            label="Re-Password"
            defaultValue={signupState.inputs?.p2 || ""}
          />
        </div>
        <SubmitButton isLoading={isPending}>Sign Up</SubmitButton>
      </div>
    </Form>
  );
}
