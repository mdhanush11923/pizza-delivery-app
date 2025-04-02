"use server";

import bcrypt from "bcryptjs";
import { db } from "@/db";
import { signupSchema } from "@/schemas";

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
    const existingUser = await db.user.findUnique({
      where: { email: rawData.email },
    });

    if (existingUser) {
      return {
        errors: { _form: ["This email is already in use"] },
        inputs: rawData,
      };
    }

    const hashedPassword = await bcrypt.hash(rawData.p1, 10);
    const fullName = `${rawData.firstName} ${rawData.lastName}`.trim();

    await db.user.create({
      data: {
        name: fullName,
        password: hashedPassword,
        email: rawData.email,
      },
    });

    return { success: true, inputs: rawData };
  } catch (err) {
    console.error("Signup error:", err);
    return {
      errors: {
        _form: ["Signup failed due to an unexpected error"],
      },
      inputs: rawData,
    };
  }
}
