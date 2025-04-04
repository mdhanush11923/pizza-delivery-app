"use server";

import { signIn } from "@/auth";
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
      email: result.data.email,
      password: result.data.password,
      redirect: false,
    });

    return { success: true };
  } catch (err) {
    if (err instanceof AuthError) {
      let errorMessage = "Something went wrong. Please try again.";

      switch (err.type) {
        case "CredentialsSignin":
          errorMessage = "Invalid email or password.";
          break;
        case "OAuthAccountNotLinked":
          errorMessage =
            "This account was registered using Google or GitHub. Please log in with that method.";
          break;
        case "AccessDenied":
          errorMessage = "Access denied. Please contact support.";
          break;
        case "Verification":
          errorMessage = "Email verification failed.";
          break;
        default:
          errorMessage = err.message || errorMessage;
      }

      console.log(errorMessage);

      return {
        errors: {
          _form: [errorMessage],
        },
        inputs: rawData,
        success: false,
      };
    }

    return {
      errors: {
        _form: ["An unexpected error occurred. Please try again later."],
      },
      inputs: rawData,
      success: false,
    };
  }
}
