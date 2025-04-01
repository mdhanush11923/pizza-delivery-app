import { z } from "zod";

const signupSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export async function registerUser(prevState: any, formData: FormData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  const parsed = signupSchema.safeParse({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  });

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  try {
    await someUserRegistrationFunction({
      firstName,
      lastName,
      email,
      password,
    });
    return { success: true };
  } catch (err) {
    return { errors: { general: "Signup failed" } };
  }
}
