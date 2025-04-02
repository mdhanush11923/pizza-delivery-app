import { z } from "zod";

export const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name must be at least 2 characters")
      .max(25, "First name is too long")
      .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid characters in first name")
      .trim(),

    lastName: z
      .string()
      .min(1, "Last name must be at least 1 character")
      .max(25, "Last name is too long")
      .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid characters in last name")
      .trim(),

    email: z
      .string()
      .email("Invalid email address")
      .max(100, "Email is too long")
      .trim(),

    p1: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(64, "Password is too long")
      .regex(/[A-Z]/, "Password must have at least one uppercase letter")
      .regex(/[a-z]/, "Password must have at least one lowercase letter")
      .regex(/[0-9]/, "Password must have at least one number")
      .trim(),

    p2: z.string().trim(),
  })
  .refine((data) => data.p1 === data.p2, {
    message: "Passwords do not match",
    path: ["p2"],
  });

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .max(100, "Email is too long")
    .trim(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password is too long")
    .trim(),
});
