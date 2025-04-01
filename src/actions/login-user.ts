"use server";

import { signIn } from "@/auth";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function loginUser(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const parsed = loginSchema.safeParse({ email, password });

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return { errors };
  }

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!result || result.error) {
      return { errors: { general: "Invalid credentials" } };
    }

    return { success: true };
  } catch {
    return { errors: { general: "Something went wrong" } };
  }
}
