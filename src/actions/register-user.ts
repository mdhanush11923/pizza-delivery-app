"use server";

import { z } from "zod";

const signupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    p1: z.string().min(6, "Password must be at least 6 characters"),
    p2: z.string(),
  })
  .refine((data) => data.p1 === data.p2, {
    message: "Passwords do not match",
    path: ["p2"],
  });

interface RegisterFormState {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    p1?: string[];
    p2?: string[];
    _form?: string[];
  };
  inputs?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    p1?: string;
    p2?: string;
  };
  success?: boolean;
}

export async function registerUser(
  prevState: RegisterFormState,
  formData: FormData
): Promise<RegisterFormState> {
  const rawData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    p1: formData.get("p1") as string,
    p2: formData.get("p2") as string,
  };

  const result = signupSchema.safeParse(rawData);

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: result.error.flatten().fieldErrors,
      inputs: rawData,
    };
  }

  try {
    console.log("User registration data:", rawData);
    return { success: true, inputs: rawData };
  } catch (err) {
    return {
      errors: {
        _form: ["Signup failed due to an unexpected error"],
      },
      inputs: rawData,
    };
  }
}
