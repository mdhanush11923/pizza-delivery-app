import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { loginSchema } from "./schemas";
import bcrypt from "bcryptjs";
import { db } from "./db";

export default {
  providers: [
    GitHub,
    Google,
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Validate input
        const validatedFields = loginSchema.safeParse(credentials);
        if (!validatedFields.success) {
          return null;
        }

        const { email, password } = validatedFields.data;

        // Check if user exists
        const user = await db.user.findUnique({ where: { email } });
        if (!user) {
          return null;
        }

        // Ensure the user has a password (for social logins without passwords)
        if (!user.password) {
          return null;
        }

        // Verify password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          return null;
        }

        return user; // ✅ Return user when login is successful
      },
    }),
  ],
} satisfies NextAuthConfig;
