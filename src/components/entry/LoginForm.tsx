import { addToast, Button, Form, Input } from "@heroui/react";
import React, { useActionState } from "react";
import * as actions from "@/actions";
import PasswordInput from "./PasswordInput";

export default function LoginForm() {
  const [loginState, loginAction, isLoginPending] = useActionState(
    actions.loginUser,
    {
      errors: {},
      inputs: {},
    }
  );

    const firstErrors = Object.fromEntries(
      Object.entries(loginState.errors || {}).map(([key, value]) => [
        key,
        Array.isArray(value) ? value[0] : value,
      ])
    );

  return (
    <Form
      key={JSON.stringify(loginState.inputs)} // Ensure form resets on success
      action={loginAction}
      validationErrors={firstErrors}
      validationBehavior="aria"
    >
      <div className="flex-col w-full space-y-5 justify-center">
        <Input
          isClearable
          name="email"
          type="email"
          label="Email"
          defaultValue={loginState.inputs?.email || ""}
        />
        <PasswordInput
          name="password"
          label="Password"
          defaultValue={loginState.inputs?.password}
        />
        <div className="flex justify-end">
          <Button
            className="place-self-end"
            variant="light"
            onPress={
              () => {
              addToast({
                color: "warning",
                title: "Did you forget to eat?",
              })
            }
            }
          >
            Forgot password?
          </Button>
        </div>

        <Button
          fullWidth
          radius="lg"
          className="bg-[#4C5D65] font-semibold hover:font-extrabold hover:bg-[#F27F14] text-white h-16"
          variant="solid"
          size="lg"
          type="submit"
          isLoading={isLoginPending}
        >
          Login
        </Button>
      </div>
    </Form>
  );
}
