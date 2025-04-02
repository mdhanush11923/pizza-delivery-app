import { addToast, Button, Form, Input } from "@heroui/react";
import React, { useActionState } from "react";
import * as actions from "@/actions";
import PasswordInput from "./PasswordInput";

export default function RegisterForm() {
  const [signupState, signupAction, isPending] = useActionState(
    actions.registerUser,
    {
      errors: {},
      inputs: {},
    }
  );

    // React.useEffect(() => {
    //   if (signupState.errors?._form) {
    //     addToast({
    //       color: "danger",
    //       title: signupState.errors._form[0],
    //     });
    //   }
    //   if (signupState.success) {
    //     addToast({
    //       color: "success",
    //       title: "Signup successful!",
    //     });
    //   }
    // }, [signupState]);

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
        <Button
          fullWidth
          radius="lg"
          className="bg-[#4C5D65] font-semibold hover:font-extrabold hover:bg-[#F27F14] text-white h-16"
          variant="solid"
          size="lg"
          type="submit"
          isLoading={isPending}
        >
          Sign Up
        </Button>
        {/* <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={openSignupAlert}
          autoHideDuration={6000}
          onClose={handleAlertClose}
        >
          <Alert
            onClose={handleAlertClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            You’ve successfully signed up. Please log in to continue.
          </Alert>
        </Snackbar> */}
      </div>
    </Form>
  );
}
