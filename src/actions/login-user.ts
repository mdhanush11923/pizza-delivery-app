"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/paths";
import { loginSchema } from "@/schemas";
import { AuthError } from "next-auth";

interface LoginFormState {
  errors?: {
    email?: string[];
    password?: string[];
    _form?: string[];
  };
  inputs?: {
    email?: string;
    password?: string;
  };
  success?: boolean;
}

export async function loginUser(
  prevState: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  const rawData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const result = loginSchema.safeParse(rawData);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      inputs: rawData,
    };
  }

  try {
    await signIn("credentials", {
      email: rawData.email,
      password: rawData.password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return {
            errors: {
              _form: ["Invalid email or password"],
            },
            inputs: rawData,
          };
        default:
          return {
            errors: {
              _form: ["Something went wrong"],
            },
            inputs: rawData,
          };
      }
    }
    throw err;
  }
}
