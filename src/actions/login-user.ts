"use server";

import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

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
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: result.error.flatten().fieldErrors,
      inputs: rawData,
    };
  }

  try {
    // const authResult = await signIn("credentials", {
    //   email: rawData.email,
    //   password: rawData.password,
    //   redirect: false,
    // });

    // if (!authResult || authResult.error) {
    //   return {
    //     errors: {
    //       _form: ["Invalid credentials"],
    //     },
    //     inputs: rawData,
    //   };
    // }
    console.log(rawData);
    return { success: true, inputs: rawData };
  } catch (err) {
    return {
      errors: {
        _form: ["Something went wrong"],
      },
      inputs: rawData,
    };
  }
}
